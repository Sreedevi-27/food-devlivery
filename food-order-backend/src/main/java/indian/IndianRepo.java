package indian;

import config.Config;
import homepage.Cuisine;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class IndianRepo {
    public List<FoodItems> getMainDishes(){
        List<FoodItems> dishes = new ArrayList<>();
        try{
            Connection connection = DriverManager.getConnection(Config.DB_URL, Config.USER, Config.PASSWORD);
            String query = "select food_name, food_image from food_items";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            ResultSet resultSet = preparedStatement.executeQuery();
            while(resultSet.next()){
                dishes.add(new FoodItems(
                        resultSet.getString("food_name"),
                        resultSet.getString("food_image"))
                );
            }
            connection.close();
            return dishes;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<Food> getFood(String foodName){
        List<Food> food = new ArrayList<>();
        try{
            Connection connection = DriverManager.getConnection(Config.DB_URL, Config.USER, Config.PASSWORD);
            String selectFoodName = "select food_id from food_items where food_name=?";
            PreparedStatement preparedStatement = connection.prepareStatement(selectFoodName);
            preparedStatement.setString(1, foodName);
            ResultSet resultSet = preparedStatement.executeQuery();
            String foodId = "";
            if(resultSet.next())
                foodId = resultSet.getString("food_id");

            String query = "select * from item_category where food_id=?";
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.setString(1, foodId);
            resultSet = preparedStatement.executeQuery();
            while(resultSet.next()){
                food.add(new Food(
                        resultSet.getString("item_name"),
                        resultSet.getString("item_image"),
                        resultSet.getInt("price"),
                        resultSet.getFloat("ratings"))
                );
            }

            connection.close();
            return food;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
