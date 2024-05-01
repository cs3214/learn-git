let myProfile = {
    lastName: "Kato",
    firstName: "Takeshi",
    birthday: "09/13",

    getFullName() { // これがメソッド
      return this.lastName + " " + this.firstName;
    },

    getFullInfo(){
      return this.lastName + " " + this.firstName + " "
      + this.birthday + "生まれ";
    }
  }
  
  console.log(myProfile.getFullName())
  console.log(myProfile.getFullInfo());