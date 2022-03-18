# Description 
A project which is focused on creating an advanced task manager which can be used to...well, schedule tasks and ... 

The project is split into 3 parts - homepage, documentation and task creation/management. ...


Task functionality: Users can create multiple categories. Each category can hold a total of 30 tasks. Each category can have its own border color when being created. Once it is created, you can also edit it to change its name, description & border color. 

Each category is split into 3 parts: 
* Remaining Tasks - Tasks you haven't marked as finished yet. 
* Completed Tasks - Tasks you have marked as finished.
* Expired Tasks - Tasks which you couldn't completed before their time ran out.

<br />

## Features & Technolgies 
* Styling - Tailwindcss 
* Framework - React
* Testing - Jest + @testing-library/react
* PWA [downloadable]
* Google Analytics (?)
* Web APIs to use: 
  * Vibration
  * Service Workers + Cache for offline support
  * File System Access
  * IndexedDB + Storage
  * Web Speech 
  * Web Notifications
  * Web Workers (?)
  * Clipboard (?)

<br />

## File Format 
Extension: .tctf - Task Category File

Example: Single Category Export 

```
-CATEGORYSTART
-Category; Color: #FF34A0;
-Heading: An example category 
-Text: This is an example description of the example category 

---TaskList

-TASKSTART
--Name: Throw out the trash 
--Description: Make sure to throw out the trash, because otherwise it will start smelling!
--Expiry: 2022-03-20T08:00:00.546Z
--Status: Incomplete
-TASKEND

-TASKSTART
--Name: Paint the walls
--Description: Paint the walls of the new building in blue/red colors.
--Expiry: 2022-03-26T03:30:00.546Z
--Status: Incomplete
-TASKEND
-CATEGORYEND
```

...