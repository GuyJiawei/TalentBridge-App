# TalentBridge - Recruitment Application

  ![License Badge](https://img.shields.io/badge/license-MIT-green.svg)

  ## Description
Welcome to TalentBridge, the job finder app that connects you with the right job opportunities to advance your career!

TalentBridge is a user-friendly app designed to help you find your dream job quickly and easily. Whether you're fresh out of college or an experienced professional looking for a new challenge, TalentBridge has got you covered.

Here's what you can expect when you download TalentBridge:

- Simple and intuitive interface: The app is easy to use and navigate, making it simple for you to search for job openings and apply for positions that match your skills and experience.

## Future development
- Customised job search : TalentBridge allows you you customise your job search based on your location, industry, experience, level and other preferences.

-  Job recomendation- based on your profile, TalentBridge will like to send you the job recommendations.


## Table of Contents

* [Installation](#installation)
* [Contributing](#contrubuting)
* [Technologies](#technologies)
* [License](#license)
* [Questions](#questions)

## Installation

### Heroku- https://talent-bridge-app.herokuapp.com/

### Local machine -
- Clone the repository and run an integrated terminal.
- Enter 'npm i' to download and install the required dependencies.
- Create .env file and add: 
- `DB_NAME= Talent_db'`
- `DB_PASSWORD='INSERT YOUR SQL PASSWORD'`
- `DB_USER='root'`
- Open an integrated terminal and enter `mysql -u root -p`, enter password to start MySQL.
- Enter `source db/schema.sql` to create the database.
- Enter `node seeds/index.js` to create the example data.
- In the terminal enter `node server.js` and the application will run.


# Technologies used in the project
- To build this app, we had used Javascript primarily, we also had used node.js, MySQL, Bootstrap, Handlebars. Also various node packages have been used 
  which are as follows-
  
  - Express: used as the application server.
  - bcrypt : used for password encryption.
  - mysql2 : used as database connection driver.
  - dotenv : used for securing databse connection.
  - sequelize : used for sql
  - moment.js : used for time driven data

## Contributing

Contribution to this project will not be accepted, unfortunately. Thank you for your interest!


## Screenshots
### login page/Homepage
![Image 9-3-2023 at 5 53 pm](https://user-images.githubusercontent.com/117637113/223944702-9e66e8cb-23cc-4f62-a71d-f9a26bed4e80.jpg)


### Signup page
![Image 9-3-2023 at 5 54 pm](https://user-images.githubusercontent.com/117637113/223944766-500b3fb2-6d65-46aa-957d-758748c374f5.jpg)


### Profile 
![Image 9-3-2023 at 5 55 pm 2](https://user-images.githubusercontent.com/117637113/223944829-9cb336f6-7590-412a-8e11-d39f2f57576f.jpg)



### Jobs ads
![Image 9-3-2023 at 5 55 pm](https://user-images.githubusercontent.com/117637113/223944878-5bcd0a7e-a8df-444f-ac64-e4549e384ac5.jpg)

## License
- MIT
- https://choosealicense.com/licenses/MIT/
- A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.





## Questions

If you have any questions or require further information, please contact me at:

- GitHub: https://github.com/GuyJiawei
- Email: guy.jiawei.anderson@gmail.com

## Demo
Full video at: https://drive.google.com/drive/u/0/folders/1UyUEFB5XT-NMHoaMfX0TNRdzYaItLAao

![GIF](./assets/e-commerce_demo-gif.gif)
