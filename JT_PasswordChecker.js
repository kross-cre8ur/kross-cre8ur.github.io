class JT_PasswordChecker{

    static init(){
        this.errors = [
            {
                msg: "At least 8 characters",
                valid: false,
            },
            {
                msg: "At least 1 capital and lowercase letter",
                valid: false,
            },
            {
                msg: "at least 1 alphanumeric",
                valid: false,
            },
        ];
    }

    static isValidPwd( string ){

        this.errors[0].valid = string.length >= 8;
        this.errors[1].valid = (/[A-Z]/g).test( string ) && (/[a-z]/g).test( string );
        this.errors[2].valid = ( /[^A-Za-z0-9]/g ).test( string );

        let valid = true;
        for( let j = 0; j < this.errors.length; j++ ){
            valid = valid && this.errors[j].valid;
        }

        return valid;

    }

}

// JT_PasswordChecker.init();
