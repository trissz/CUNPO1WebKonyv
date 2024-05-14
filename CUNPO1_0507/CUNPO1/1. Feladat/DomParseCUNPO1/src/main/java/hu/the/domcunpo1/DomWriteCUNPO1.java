package hu.the.domcunpo1;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

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
            
            Document new_doc = buildTree(doc);
            
            write(new_doc, "orarend1CUNPO1.xml", "console");
            write(new_doc, "orarend1CUNPO1.xml", "file");
        }
        catch ( Exception e )
        {
            e.printStackTrace();
        }
    }
    
    private static Document buildTree(Document doc)
    {
        Document new_doc = createNewDocument();
        
        Element root_element = doc.getDocumentElement();
        
        NodeList oraList = root_element.getElementsByTagName("ora");
        
        List<Node> oraNodes = new ArrayList<>();
        
        for ( int i = 0; i < oraList.getLength(); i ++ )
        {
            oraNodes.add(oraList.item(i));
        }
        
        for ( Node ora_node : oraNodes )
        {
            if ( ora_node.getNodeType() == Node.ELEMENT_NODE )
            {
                Element oraElement = (Element) ora_node;

                Element new_ora_element = new_doc.createElement("ora");
                new_ora_element.setAttribute("id", oraElement.getAttribute("id"));

                NodeList child_nodes = oraElement.getChildNodes();
                
                for ( int j = 0; j < child_nodes.getLength(); j ++ )
                {
                    Node child_node = child_nodes.item(j);
                    
                    if ( child_node.getNodeType() == Node.ELEMENT_NODE )
                    {
                        Element child_element = (Element) child_node;
                        Element new_child_element = new_doc.createElement(child_element.getTagName());
                        
                        if ( child_element.getTagName().equals("idopont") )
                        {
                            Element idopont_element = new_doc.createElement("idopont");
                            
                            Element nap_element = new_doc.createElement("nap");
                            nap_element.setTextContent(child_element.getElementsByTagName("nap").item(0).getTextContent());
                            idopont_element.appendChild(nap_element);

                            Element tol_element = new_doc.createElement("tol");
                            tol_element.setTextContent(child_element.getElementsByTagName("tol").item(0).getTextContent());
                            idopont_element.appendChild(tol_element);

                            Element ig_element = new_doc.createElement("ig");
                            ig_element.setTextContent(child_element.getElementsByTagName("ig").item(0).getTextContent());
                            idopont_element.appendChild(ig_element);

                            new_ora_element.appendChild(idopont_element);
                        }
                        else
                        {
                            new_child_element.setTextContent(child_element.getTextContent());
                            new_ora_element.appendChild(new_child_element);
                        }
                    }
                }

                new_doc.getDocumentElement().appendChild(new_ora_element);
            }
        }
        
        return new_doc;
    }
    
    private static void write(Document doc, String file_name, String method)
    {
        try
        {
            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();
            DOMSource source = new DOMSource(doc);
            StreamResult result = null;
            
            if ( method.equals("file") )
            {
                result = new StreamResult(new File(file_name));
            }
            else if ( method.equals("console") )
            {
                result = new StreamResult(System.out);
            }
            
            if ( result != null )
            {
                transformer.transform(source, result);
            }
        }
        catch ( Exception e )
        {
            e.printStackTrace();
        }
    }
    
    private static Document createNewDocument()
    {
        try
        {
            DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder docBuilder = docFactory.newDocumentBuilder();
            Document new_doc = docBuilder.newDocument();
            
            Element rootElement = new_doc.createElement("BTK_orarend");
            new_doc.appendChild(rootElement);
            
            return new_doc;
        }
        catch ( Exception e )
        {
            e.printStackTrace();
            return null;
        }
    }
}