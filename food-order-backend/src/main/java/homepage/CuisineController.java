package homepage;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Map;

@WebServlet(name="cuisine", urlPatterns = "/cuisine")
public class CuisineController extends HttpServlet {
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
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        CuisineService cuisineService = new CuisineService();
        List<Cuisine> cuisines = cuisineService.getCuisine();
        sendAsJson(response, cuisines);
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
