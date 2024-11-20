### Final Project for N220

### Github Repository Link
https://github.com/JJuarez00/N220/tree/main/FINAL

### Github Pages Link
https://github.com/JJuarez00/N220/tree/main/FINAL/index.html

### UI LAYOUT
- Login Form Page
    - Username & Password inputs
    - Create new account button
    - Alert (username or password is incorrect)
- New User Form Page
    - Username & Password inputs
    - Back to login page button
    - Notification Message (if requirements are not met)

- Dashboard Page
    - Div Box
        - Welcome header for ${username}
        - Add Task button
            - Prompt box (when add task is clicked)
    - Section Box (Only visible when user adds a task)
        - Checkbox button
        - Remove task button
        - Edit Task Text button
            - Prompt box (when edit text is clicked)
    - Log Out button

---

### FEATURES
**Login Form**
- DOM references:
    - Password inputs
    - Username inputs
    - Login Button
- Logic:
    - Password & Username:
        - If empty, notify user to fill in the blank input(s)

**New User Form**
- DOM references:
    - Password inputs
    - Username inputs
    - Create User button
- Logic:
    - Username Validity:
        - There cannot be duplicate usernames

    - Password Validity:
        - Must NOT be empty
        - Must contain at least ONE capital letter 
        - Must contain at least ONE number
        - Must be at least 8 characters

**Dashboard (Available when logged-in)**
- If there is saved data with the account, then display it on the website.
- DOM references:
    - Ability to remove task button
    - Ability to edit task text button
    - Edit text prompt input



---

### CODE

**Data Types Used**
    
    Strings

        Login Page
            - username = input
            - password = input

        New User Form
            - createUsername = input
            - createPassword = input

        Dashboard
            - taskInputTitle = prompt box input
            - editTaskTitle = prompt box input
---
    Boolean

        New User Form Page
            - notEmpty = false
            - hasCapital = false
            - hasNumber = false
            - hasCharMin = false
---
    Lists / Arrays / Objects

        const users = []
        const user = {
            username: username
            password: password
        }
        
---

