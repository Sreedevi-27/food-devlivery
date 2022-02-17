package indian;

import java.util.List;

public class IndianService {
    IndianRepo indianRepo = new IndianRepo();
    public List<FoodItems> getMainDishes(){ return indianRepo.getMainDishes(); }

    public List<Food> getFood(String foodName) {
        return indianRepo.getFood(foodName);
    }
}
