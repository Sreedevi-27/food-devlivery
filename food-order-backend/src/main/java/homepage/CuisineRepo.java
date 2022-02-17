package homepage;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import config.Config;

public class CuisineRepo {

    public  List<Cuisine> getCuisine(){
        List<Cuisine> cuisine = new ArrayList<>();
        try{
            Connection connection = DriverManager.getConnection(Config.DB_URL, Config.USER, Config.PASSWORD);
            String query = "select * from cuisines";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            ResultSet resultSet = preparedStatement.executeQuery();
            while(resultSet.next()){
                cuisine.add(new Cuisine(
                        resultSet.getString("cuisine_name"),
                        resultSet.getString("image"))
                );
            }
            connection.close();
            return cuisine;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
