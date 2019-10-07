package annette;
import java.util.Scanner;

public class annetteApp {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        //Animal Class
        Dog d = new Dog(6, "Canis familiaris", true, "lab", "Luna");
        System.out.println("My dog is " + d.getAge() + " and is of the species " + d.getSpecies() + ".\n" );
        System.out.println("She most definitely is alive, this is " + d.isAlive() + " . She is of the " + d.breed  + " breed and her name is " + d.name + ".\n" );


        Cat C = new Cat(5000, "Prionailurus Bengalensis", "Leopard Cat", true,  "Neolithic China");


        System.out.println("The cat we are going to discuss today is the " + C.getBreed() + " of the " +  C.getSpecies() + "species.\n" +
                "The origins of this creature trace back to " + C.getOrigin() + " and radiometric dating of \n" +
                "Leopard Cat fossil remains excavated in Neolithic villages in China date as far back as " + C.getAge() + " years."
        );

        Dog Lucky = new Dog(12, "Canis lupus familiaris", true,"American Cockerspaniel","Lucky");
        System.out.println(Lucky.getAge());
        System.out.println(Lucky.getSpecies());
        System.out.println(Lucky.getBreed());




                //Math inheritance
                Adder a = new Adder();

                System.out.println("My superclass is: " + a.getClass().getSuperclass().getName());
                System.out.println(a.add(10, 32) + " " + a.add(10,3) + " " + a.add(10,10));


                //Alcohol inheritance

                Alcohol drink = new Beer();
                System.out.println(drink.stateHistoryOf());

                Alcohol drink1 = new Wine();
                System.out.println(drink1.stateHistoryOf());

                Alcohol drink2 = new Spirits();
                System.out.println(drink2.stateHistoryOf());

                Whiskey w = new Whiskey();
                System.out.println(w.Whiskey("Johnnie Walker"));








            }

}



