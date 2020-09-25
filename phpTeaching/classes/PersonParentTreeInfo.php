<?php
 header('Content-Type: text/html; charset=utf-8');
  class Person{
    #group of variables(properties will be the same) below
    private  $name;
    private  $lastname;
    private  $age;
    private  $mother;
    private  $father;
    #group of variables(properties will be the same) above
    
    #constructor below
    function __construct($name, $lastname, $age, $mother=null, $father=null){
        $this->name = $name;
        $this->lastname = $lastname;
        $this->age = $age;
        $this->mother = $mother;
        $this->father = $father;
    }
    #constructor above
    
    #group of methods below
    function getName(){
      return $this->name;
    }
    
    function getLastName(){
      return $this->lastname;
    }
    
    function getAge(){
      return $this->age;
    }
    
    function getMother(){
      return $this->mother;
    }
    
    function getFather(){
      return $this->father;
    }
    
    function getInfo(){
      return "
      ~О себе~<br>
      Меня зовут: ".$this->getName()." <br>
      Моя фамилия: ".$this->getLastName()." <br>
      Мой возраст: ".$this-> getAge()." <br>
      <br>~О родителях~<br>
      Моя мать: ".$this->getMother()->getName()." ".$this->getMother()->getLastName()." ".$this->getMother()->getAge()."<br>
      Мой отец: ".$this-> getFather()->getName()." ".$this->getFather()->getLastName()." ".$this->getFather()->getAge()."<br>
      <br>~О дедушках и бабушках~<br>
      Моя бабушка по маминой линии: ".$this->getMother()->getMother()->getName()." ".$this->getMother()->getMother()->getLastname()." ".$this->getMother()->getMother()->getAge()."<br>
      Мой дедушка по маминой линии: ".$this->getMother()->getFather()->getName()." ".$this->getMother()->getFather()->getLastname()." ".$this->getMother()->getFather()->getAge()."<br>
      Моя бабушка по папиной линии: ".$this->getFather()->getMother()->getName()." ".$this->getFather()->getMother()->getLastname()." ".$this->getFather()->getMother()->getAge()."<br>
      Мой дедушка по папиной линии: ".$this->getFather()->getFather()->getName()." ".$this->getFather()->getFather()->getLastname()." ".$this->getFather()->getFather()->getAge()."<br>
      ";
    }
    #group of methods above
  }


  #objects below
  //mother group below
  $igor = new Person("Igor","Petrov",68);
  $alexa = new Person("Alexa","Petrova",69);
  $masha = new Person("Masha","Petrova",42,$alexa, $igor);
  //mother group above
  
  //father group below
  $nick = new Person("Nick","Dunkin",70);
  $klava = new Person("Klava","Dunkina",72);
  $harry = new Person("Harry","Dunkin",45, $klava, $nick);
  //father group above
  
  //son below
  $denny = new Person("Denny", "Dunkin", 18, $masha, $harry);
  echo $denny -> getInfo();
  //son above
  #objects above
?>
