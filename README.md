# Task-Tracker-BE

### Create ESC Instance for backend using centos 7.9 image then run the commands below :

#### The backend is running on port 3001

- yum update -y
- yum install nodejs -y
- yum install npm -y
- yum install git -y
- git clone https://github.com/Tuwaiq-Cloud-Computing/Task-Tracker-BE.git
- cd Task-Tracker-BE
- echo "DATABASE_URL=\"mysql://USERNAME:PASSWORD@DATABASE-PUBLIC-END-POINT:3306/DATABASE\""> .env
- npm i
- npx pm2 start index.js
- npx pm2 startup
- npx pm2 save

#### After running these commands create custom images of this instance and use it as auto-scaling image


### Database  :
#### Use This SQL code to create the database


CREATE TABLE Tasks (ID int PRIMARY key AUTO_INCREMENT ,task VARCHAR (256) , isDone BOOLEAN  );
