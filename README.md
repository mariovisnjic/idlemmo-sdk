# idlemmo-js-wrapper
```
// Import and configure the module
import idlemmo, { configure, getUsers } from './idlemmo';

configure('user-provided-api-key');

async function fetchUsers() {
    const users = await getUsers();
    console.log(users);
}

or

async function checkStatus() {
    const status = await idlemmo.getStatus();
    console.log(status);
}
```
