package homepage;

import indian.Food;

import java.util.List;

public class CuisineService {
    CuisineRepo cuisineRepo = new CuisineRepo();
    public  List<Cuisine> getCuisine(){
        return cuisineRepo.getCuisine();
    }
}
