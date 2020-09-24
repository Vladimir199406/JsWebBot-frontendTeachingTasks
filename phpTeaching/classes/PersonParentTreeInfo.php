<?php
  header('Content-Type: text/html; charset=utf-8');
  class Person{
    #group of properties below
    private $name;
    private  $lastname;
    private  $age;
    private  $mother;
    private  $father;
    private  $grandMotherMomSide;
    private  $grandFatherMomSide;
    private  $grandMotherDadSide;
    private  $grandFatherDadSide;
    #group of properties above
    
    #constructor below
    function __construct($name, $lastname, $age, 
      $mother=null, $father=null,
      $grandMotherMomSide=null, $grandFatherMomSide=null,
      $grandMotherDadSide=null, $grandFatherDadSide=null){
        $this->name = $name;
        $this->lastname = $lastname;
        $this->age = $age;
        $this->mother = $mother;
        $this->father = $father;
        $this->grandMotherMomSide = $grandMotherMomSide;
        $this->grandFatherMomSide = $grandFatherMomSide;
        $this->grandMotherDadSide = $grandMotherDadSide;
        $this->grandFatherDadSide = $grandFatherDadSide;
    }
    #constructor above
    
    #group of methods below
    function getName(){
      return $this->name;
    }
    
    function getMother(){
      return $this->mother;
    }
    
    function getFather(){
      return $this->father;
    }
    
    function getGrandMotherMomSide(){
      return $this->grandMotherMomSide;
    }
    
    function getGrandFatherMomSide(){
      return $this->grandFatherMomSide;
    }
    
    function getGrandMotherDadSide(){
      return $this->grandMotherDadSide;
    }
    
    function getGrandFatherDadSide(){
      return $this->grandFatherDadSide;
    }
    
    function getInfo(){
      return "
      Меня зовут: ". $this-> getName()." <br>
      Моя мать: ". $this-> getMother()." <br>
      Мой отец: ". $this-> getFather()." <br>
      Моя бабушка по маминой линии: ". $this-> getGrandMotherMomSide()." <br>
      Мой дедушка по маминой линии: ". $this-> getGrandFatherMomSide()." <br>
      Моя бабушка по папиной линии: ". $this-> getGrandMotherDadSide()." <br>
      Мой дедушка по папиной линии: ". $this-> getGrandFatherDadSide()." <br>
      ";
    }
    #group of methods above
  }
  
  #object below
  $igor = new Person("Igor", "Petrov", 28, "Anna", "Bill", "Nancy", "Egor", "Julia", "Denis");
  echo $igor -> getInfo();
  #object above
  
?>
