# WiseStep-assignment

Steps to run the application in local.

1) CLone backend folder code to STS or intellij.
  i)Build the application using Maven. (Maven clean and Maven install)
  ii)Run the application (default port is : localhost:8080)
 
2) Clne the frontEndCode folder to VSCODE.
  i) npm install
  ii)ng serve

3) when both the applications are started : 
      i) open http://localhost:4200/generateurl and enter the actuall URL in text box
      ii) It will generate the shorten URL
      iii) Click on the shorten URL it will re-direct to actuall URL and try to change the shorten url and enter it will show invalid URL message

Handled possible error suitation like Duplicate URL, Invalid URL, expired URL, etc.,

