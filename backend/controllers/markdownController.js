import { marked } from "marked";
import { markdown } from "markdown";
import showdown from "showdown";
export const getHtmlController = (req, res, next) => {
  const markdownContent = req.body.markdown;
  console.log("here");
  // Check if markdown content exists
  if (!markdownContent) {
    return res.status(400).json({ error: "No Markdown content provided" });
  }
  console.log(markdownContent);
  const converter = new showdown.Converter();
  // Convert Markdown to HTML
  const htmlContent = converter.makeHtml(markdownContent);
  //   const htmlContent = marked(markdownContent);

  // Respond with the HTML content wrapped in a full HTML document
  res.send(htmlContent);
};
