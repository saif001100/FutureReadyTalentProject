# Futurereadytalent - InnoDecor Azure Web App Bot
Presenting a cutting-edge Future Ready Talent Program designed to equip individuals with essential skills for the digital age. Our Microsoft Azure project submission demonstrates innovative solutions and proficiency in cloud computing technology.

## Group Project
Group Members:

Sakshi Gupta -
https://github.com/SakshiGupta1901

Saif Idrisi - 
https://github.com/saif001100

Deepak Yadav -
https://github.com/deepaky26

## Introduction

### Background:

Step into a digital haven where design aspirations are transformed into reality.
Our website represents the epitome of contemporary interior design, offering an immersive online journey.
Clients are invited to explore a curated selection of inspirations and tailor-made solutions, igniting their creativity.
With our platform, homeowners are empowered to effortlessly reimagine their living spaces, ensuring comfort and style converge seamlessly.
Embrace a world where the essence of home is redefined, accessible with just a click.

### Problem Statement

In existing interior decor websites, limited interaction and lack of personalized assistance hinder users' ability to find inspiration and make informed decisions. Innodecor addresses this by integrating Azure QnA for real-time personalized suggestions, revolutionizing the user experience.

### Objective

Our primary aim is to replicate the convenience and sophistication of traditional interior design services through innovative online features.
By introducing an intuitive appointment scheduling system, we seek to enhance client engagement and offer personalized consultations.
We prioritize offering customization options to ensure that our designs not only meet but exceed each client's expectations.

### Scope

Our services encompass a comprehensive range of interior design solutions, meticulously tailored to individual preferences and needs.
Through our chatbot interface, users can engage in interactive design consultations, receiving personalized recommendations and advice.
We aim to streamline communication and engagement by collecting user details through our contact page, fostering seamless interaction.
It's important to note that our current scope is focused solely on the visual representation of completed projects.

## Resource Visualizer
### InnoDecor Resource Group

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/f33c811d-28ad-426b-b3ad-539294883ddf)

### DSSChat Resource Group

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/1479b121-992d-44c6-8a31-405a7e175729)

## Website Overview

This is Our Home Page

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/1021729b-9a3e-4000-9200-ed04eaecd9a6)

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/fc4a41a5-280f-4988-82b1-2e5478305898)

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/1636bbdc-f7a0-4d42-8ae6-9e8f8ba1a4ee)


Our Story Page

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/176cdd7f-a7c1-4631-abb9-050cee014216)


![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/ec413d3a-1d64-4916-92f1-df3951151714)

 
 
Frequently Asked Question Page

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/b3834a8a-a091-4c03-bb0b-04a9983a6668)

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/0299d479-b522-4699-a9d3-55d5f658cac3)
 
![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/058a8e5b-5e95-47ef-bb60-c11fb1c4f575)
 
Click on Chat with Us to connect with Azure QnA Maker

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/741e2818-3c08-4681-aad9-2ff0a60c1aa8)

Contact Us Page

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/aa36c7e7-0eae-4676-9465-fd81c2db1f12)

 
If I fill the details and Click on Send Button data will be stored in Azure Storage Table
 
![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/01643c53-3869-4dc4-a772-f8aa03f2b7f4)

## Implementation

Create Storage Account and a table to store data

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/79c51518-f647-49d7-8f29-de32376486f0)

Create a Azure Bot Resource Group - DSSChat

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/6438020c-cbd7-45dc-9257-eb98b552f25f)

Azure Language

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/7ee1970c-0912-462e-b04b-23b5aaf18710)

Azure Bot

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/ed1ff092-72b7-40a4-8171-904ac560c1d4)

Create Web App in another Resource Group - Innodecor

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/0f6a79ef-d957-4391-9947-1b7392dcc65a)

InnoDecor Web App

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/fc41b790-bc2c-4b1a-b7be-e51c38adca8e)


Azure Application Insights - InnoDecorAIR

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/4d662593-7b7c-45d2-9354-a60f4f64aa8f)

Smart Detector Alert Rule in Azure Application Insight

Azure Log Alert Rule - ServiceIssue

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/62c9e187-223c-41df-8ddf-157b10078cc8)

Azure Log Analytics Workspace - workspace-InnoDecorAIR

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/438f160a-8792-44d8-b99c-2c352fee7e62)

Connection Between Storage Account Table and Web App

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/09543f90-7af3-4d32-82c7-ac346c312c81)

Coonection Betwwen azure Bot and Web App 

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/ae602d98-0574-4054-a9e1-e2ec36262cb4)

Azure App Service Backups

![image](https://github.com/deepaky26/Futurereadytalent/assets/163496220/64ee77b4-8acb-41af-9d2e-3972d3df048f)

## Technologies / Tools Used

• Microsoft Azure QnA Maker Service and cognitive service

• Azure Storage account and App Service

• Microsoft Visual Studio

#### URLs Drive Project Video and Document URL: 
https://drive.google.com/drive/folders/1przJoC5cRx2QUnhew2n_Xi-wSkiTg5B3?usp=drive_link

#### URLs Drive Project Document URL:
https://drive.google.com/file/d/1rI8d3C_uDuRON0gjEYNou2fIzrZ5Af3C/view?usp=drive_link

#### Working Project URL:
https://innodecor.azurewebsites.net/

#### Azure Student Account ID:
sakshi192487@mccmulund.ac.in


Gratitude to the Future Ready Talent Program and Microsoft Azure for empowering our project with cutting-edge technology and invaluable support, propelling us towards innovation and success.


















