class User {
    constructor(id, name, photo, email, phone, admin, password) {
        this._id = id
        this._name = name
        this._photo = photo
        this._email = email
        this._phone = phone
        this._admin = admin
        this._password = password
        let date = new Date()
        this._date = date.toLocaleDateString('pt-br')+ '  ' + date.toLocaleTimeString('pt-BR').slice(0,5)
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }

    getPhoto() {
        return this._photo;
    }

    getEmail() {
        return this._email;
    }

    getPhone() {
        return this._phone;
    }

    getAdmin() {
        return this._admin;
    }

    getPassword() {
        if(password === 'Senha do Moderador') {
         return this._password;
        } else {
            return 'Senha incorreta'
        }
        
    }

    getDate() {
        return this._date;
    }
}