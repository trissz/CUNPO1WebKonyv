package hu.the.domcunpo1;

import java.io.File;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

public class DomWriteCUNPO1
{
    public static void main(String[] args)
    {
        try
        {
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = dbFactory.newDocumentBuilder();
            Document doc = builder.parse(new File("src/test/resources/orarendCUNPO1.xml"));

            doc.getDocumentElement().normalize();
            
            outputToConsole(doc.getDocumentElement(), "");
            
            writeToFile(doc, "orarend1CUNPO1.xml");
        }
        catch ( Exception e )
        {
            e.printStackTrace();
        }
    }
    
    private static void outputToConsole(Element document_element, String tabulator_value)
    {
        System.out.print(tabulator_value + "<" + document_element.getTagName());

        if ( document_element.hasAttributes() )
        {
            for ( int i = 0; i < document_element.getAttributes().getLength(); i ++ )
            {
                System.out.print(" " + document_element.getAttributes().item(i));
            }
        }

        System.out.print(">");

        for ( int i = 0; i < document_element.getChildNodes().getLength(); i ++ )
        {
            if ( document_element.getChildNodes().item(i) instanceof Element element )
            {
                outputToConsole(element, tabulator_value + " ");
            }
            else
            {
                System.out.print(document_element.getChildNodes().item(i).getTextContent());
            }
        }

        System.out.print("</" + document_element.getTagName() + ">");
    }
    
    private static void writeToFile(Document doc, String file_name)
    {
        try
        {
            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();
            DOMSource source = new DOMSource(doc);
            StreamResult result = new StreamResult(new File(file_name));
            transformer.transform(source, result);
        }
        catch ( Exception e )
        {
            e.printStackTrace();
        }
    }
}