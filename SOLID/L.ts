// class Person {
//     access() {
//         console.log('You have an access.')
//     }
// }

// class Frontend extends Person {
//     canCreateFrontend() {}
// }

// class Backend extends Person {
//     canCreateBackend() {}
// }

// class PersonFromDifferentCompany extends Person {
//     access() {
//         throw new Error('You haven\'t access!')
//     }
// }

// function openSecretDoor(person) {
//     person.access()
// }

// openSecretDoor(new Frontend()) 
// openSecretDoor(new Backend()) 
// openSecretDoor(new PersonFromDifferentCompany())

class Person {}

class Member extends Person {
    access() {
        console.log('You have an access.')
    }
}

class Guest extends Person {
    isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error('You haven\'t access!')
    }
}

function openSecretDoor(member: Frontend | Backend | PersonFromDifferentCompany) {
    member.access()
}

openSecretDoor(new Frontend()) 
openSecretDoor(new Backend())  
openSecretDoor(new PersonFromDifferentCompany()) 