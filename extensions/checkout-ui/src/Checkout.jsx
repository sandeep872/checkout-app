
import {
  Heading,
  reactExtension,
  Grid,
  View,
  BlockStack,
  Text,
  Image,
  BlockSpacer,
} from '@shopify/ui-extensions-react/checkout';


export default reactExtension(
  'purchase.checkout.block.render', 
  () => <Extension />,
);

function Extension() {
  return (

    <>

    <Grid>
      <View>
      <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/checkout-image-1.png?v=1712577998" />
      </View>
      <BlockSpacer spacing="base"></BlockSpacer>
    </Grid>
    
    <Grid>
      <View>
      <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/check-image-2.jpg?v=1712578048" />
      </View>
    </Grid> 
      

    </>
  ); 
}