package annette;

public class Whiskey extends Spirits implements Alcohol {

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String name;


    public String Whiskey(String name) {
        this.name= name;
        if(name.equalsIgnoreCase("Johnnie Walker"))
            Spirits.johnnieWalker();
        return Spirits.johnnieWalker();
    }

}
