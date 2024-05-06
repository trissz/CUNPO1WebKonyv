package hu.the.domcunpo1;

import java.io.File;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;

public class DomReadCUNPO1
{
    public static void main(String[] args)
    {
        try
        {
            File xmlFile = new File("src/test/resources/orarendCUNPO1.xml");
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document doc = builder.parse(xmlFile);
            
            doc.getDocumentElement().normalize();
            
            NodeList ora_list = doc.getElementsByTagName("ora");
            
            for ( int i = 0; i < ora_list.getLength(); i ++ )
            {
                Element ora_element = (Element) ora_list.item(i);
                
                String ora_id = ora_element.getAttribute("id");
                
                System.out.println("Óra ID: " + ora_id);
                
                String targy = ora_element.getElementsByTagName("targy").item(0).getTextContent();
                Node idopont_node = ora_element.getElementsByTagName("idopont").item(0);
                Element idopont_element = (Element) idopont_node;
                String nap = idopont_element.getElementsByTagName("nap").item(0).getTextContent();
                String tol = idopont_element.getElementsByTagName("tol").item(0).getTextContent();
                String ig = idopont_element.getElementsByTagName("ig").item(0).getTextContent();
                String helyszin = ora_element.getElementsByTagName("helyszin").item(0).getTextContent();
                String oktato = ora_element.getElementsByTagName("oktato").item(0).getTextContent();
                String szak = ora_element.getElementsByTagName("szak").item(0).getTextContent();
                String tipus = ora_element.getElementsByTagName("tipus").item(0).getTextContent();
                
                System.out.println("Tárgy: " + targy);
                System.out.println("Időpont:\n\tNap: " + nap + "\n\tTól: " + tol + "\n\tIg: " + ig);
                System.out.println("Helyszín: " + helyszin);
                System.out.println("Oktató: " + oktato);
                System.out.println("Szak: " + szak);
                System.out.println("Típus: " + tipus);
                System.out.println();
            }
        }
        catch ( Exception e )
        {
            e.printStackTrace();
        }
    }
}