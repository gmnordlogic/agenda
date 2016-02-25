#AngularUI Agenda
Demonstrates how is build an AngularJS application using best practices, based on AngularUI and Bootstrap, and of course, Angular Local Storage.

##What the application do?
With this app you can record your contacts. After that, you can edit them or remove them from your application. 

##Structure
	/presentation
		/assets
			/css
			/images
			/js
		/client
			/app
			/content
	
##Requirements

- Install Vagrant

##Running
Runs locally, no database required.

## Setup instructions

###Setup Vagrant for local development

For Windows/OS-X/Linux you must follow the next steps:
1. Install Virtualbox from http://virtualbox.org
2. Install Vagrant from http://vangratup.com
3. Go to folder where the application is
4. Modify hosts file adding the line:
		192.168.33.170 agenda.dev
	the  file can be found on 
	/etc/hosts on OS-X/Linux or
	%SystemRoot%\System32\drivers\etc\hosts on Windows
5. Open a terminal (on OS-X or Linux) or command prompt (on Windows)
6. run command: vagrant up
7. to access the shell of the virtual machine type on a terminal (you must be in the application folder):
		vagrant ssh
8. Now you can access the application on your prefered broswer:
		http://agenda.dev/client/

##The end
That's all. For any questions please contact me at: gheorghe.morodan@nordlogic.com

