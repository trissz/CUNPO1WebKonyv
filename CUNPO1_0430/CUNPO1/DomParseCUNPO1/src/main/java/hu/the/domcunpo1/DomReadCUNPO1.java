package hu.the.domcunpo1;

import java.io.File;
import java.io.IOException;
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
            File xmlFile = new File("orarendCUNPO1.xml");
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document doc = builder.parse(xmlFile);
            
            doc.getDocumentElement().normalize();
            
            NodeList oraList = doc.getElementsByTagName("ora");
            
            for ( int i = 0; i < oraList.getLength(); i ++ )
            {
                Element oraElement = (Element) oraList.item(i);
                
                String oraID = oraElement.getAttribute("id");
                
                System.out.println("Ora ID: " + oraID);
                
                NodeList childNodes = oraElement.getChildNodes();
                
                for ( int j = 0; j < childNodes.getLength(); j ++ )
                {
                    Node childNode = childNodes.item(j);
                    
                    if ( childNode.getNodeType() == Node.ELEMENT_NODE )
                    {
                        Element childElement = (Element) childNode;
                        
                        Node node1 = childElement.getElementsByTagName("targy").item(0);
                        String subject = node1.getTextContent();
                        
                        Node node2 = childElement.getElementsByTagName("idopont").item(0);
                        Element node2Element = (Element) node2;
                        Node node2Element = node2.getElementsByTagName("nap").item(0);
                        String datetime = node2.getTextContent();
                        
                        Node subjects = childElement.getElementsByTagName("targy").item(0);
                        String subject = subjects.getTextContent();
                    }
                }
                
                System.out.println();
            }
        }
        catch ( Exception e )
        {
            e.printStackTrace();
        }
    }
}