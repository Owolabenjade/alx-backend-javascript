/**
 * Contains the miscellaneous route handlers.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello ALX!');
  }
}

export default AppController;