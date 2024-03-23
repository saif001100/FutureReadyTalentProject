const express = require('express');
const path = require('path'); 
const { TableServiceClient, TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");
const app = express();

// Serve static files and the HTML file from the same directory
app.use(express.static(__dirname));

// Serve index.html when accessing the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});



// Middleware to parse JSON request bodies
app.use(express.json());

async function storeFormData(name, email, message) {
    const endpoint = "https://store1902.table.core.windows.net";
    const accountName = "store1902";
    const accountKey = "deYcfxrFiWbLudAoMO5MTd/esLa7AiunR6EXx1221nO6VpKuobEbVGm0YvClW8AvII23fJiruWZV+ASt0J2Ueg==";
    const credential = new AzureNamedKeyCredential(accountName, accountKey);
    const tableServiceClient = new TableServiceClient(endpoint, credential);

    const tableName = 'Contact';
    
    try {
        // Create a Table Client for the specified table
        const tableClient = new TableClient(endpoint, tableName, credential);

        // Create an entity with user input
        const entity = {
            partitionKey: "Contact",
            rowKey: Date.now().toString(), // Use a unique row key, e.g., timestamp
            name: name,
            email: email,
            message: message
        };

        // Insert the entity into the table
        const result = await tableClient.createEntity(entity);
        console.log("Entity created successfully:", result);
    } catch (error) {
        console.error("Error creating entity:", error);
        throw error; // Rethrow the error to be caught by the caller
    }
}

// POST endpoint to handle form submission
app.post('/contactForm', async (req, res) => {
    const { name, email, message } = req.body;
    
    try {
        // Store form data in Azure Storage Table
        await storeFormData(name, email, message);

        res.send('Contact details submitted successfully!');
    } catch (error) {
        console.error('Error storing contact details in Azure Storage Table:', error);
        res.status(500).send('Error submitting contact details. Please try again later.');
    }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
