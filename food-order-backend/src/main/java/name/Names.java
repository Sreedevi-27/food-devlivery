package name;
import com.google.gson.Gson;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.ServletException;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name="name", urlPatterns = "/names")
public class Names extends HttpServlet {
    private final Gson gson = new Gson();

    private void sendAsJson(HttpServletResponse resp, Object object) throws IOException {
        resp.setContentType("application/json");
        resp.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        resp.setHeader("Access-Control-Allow-Credentials", "true");
        resp.setStatus(HttpServletResponse.SC_OK);
        PrintWriter printWriter = resp.getWriter();
        printWriter.write(gson.toJson(object));
        printWriter.flush();
    }

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        List<IdAndName> names = new ArrayList();
        System.out.println("Hello");
        try{
            Connection connection = DriverManager.getConnection("jdbc:mysql://@localhost:3306/food_order","root", "sree");
            String query = "select id,name from names";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            ResultSet resultSet = preparedStatement.executeQuery();
            while(resultSet.next()){
                names.add(
                new IdAndName(
                        resultSet.getInt("id"),
                        resultSet.getString("name"))
                );
            }

            System.out.println("Hello"+names.get(0)+" "+response);
            connection.close();

            sendAsJson(response, names);


        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }


    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        resp.addHeader("Access-Control-Allow-Headers", "token");
        resp.setHeader("Access-Control-Allow-Credentials", "true");
        resp.setHeader("Access-Control-Allow-Methods", "PUT, GET, DELETE, OPTIONS");
        super.doOptions(req, resp);
    }
}
