
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
      <Heading inlineAlignment="center" level={1} >Manuka Honey You Can Trust</Heading>
      <BlockSpacer spacing="base"></BlockSpacer>
      <Grid
        columns={['50%', '50%']}

      >

<View padding="base">
          <Grid
            columns={['30%', '70%']}

          >
            <View>
            <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/logo-1.png?v=1711707643" />
              <Image source="./images/logo-1.png" />
            </View>
            <View padding="base">

              <BlockStack inlineAlignment="left">
                <Heading level={3} >GenuHoney</Heading>
                <Text size="base">

                  Authenticity Certified</Text>

              </BlockStack>
            </View>

          </Grid>
        </View>
        <View padding="base">
          <Grid
            columns={['30%', '70%']}

          >
            <View>
              <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/logo-2.png?v=1711707643" />
            </View>
            <View padding="base">

              <BlockStack inlineAlignment="left">
                <Heading level={3}>100% </Heading>
                <Text size="base">
                  Satisfaction Guaranteed</Text>

              </BlockStack>
            </View>

          </Grid>
        </View>
        <View padding="base">
          <Grid
            columns={['30%', '70%']}

          >
            <View>
              <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/logo-3.png?v=1711707643" />
            </View>
            <View padding="base">

              <BlockStack inlineAlignment="left">
                <Heading level={3}>New Zealand.com  </Heading>
                <Text size="base">
                  License no. 100293</Text>

              </BlockStack>
            </View>

          </Grid>
        </View>
        <View padding="base">
          <Grid
            columns={['30%', '70%']}

          >
            <View>
              <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/logo-4.png?v=1711707643" />
            </View>
            <View padding="base">

              <BlockStack inlineAlignment="left">
                <Heading level={3}>Glyphosate
                </Heading>
                <Text size="base">
                  Residue Free</Text>

              </BlockStack>
            </View>

          </Grid>
        </View>

      </Grid>
      <Grid
        columns={['100%']}>
        <View padding="base" >
          <Heading inlineAlignment="center" level={1}>What our Customers are Saying</Heading>
        </View>

      </Grid>
      <Grid
        columns={['100%']}>
        <View>
          <Grid columns={['30%', '70%']} >
            <View padding="base">
              <Text>M</Text>
            </View>
            <View padding="base">
             
              <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/stars.png?v=1711707643" />  2/24/2024
              <Text size="base"> Verified</Text> <Heading>Martin M.</Heading>
            </View>

          </Grid>
          <Grid columns="100%">
            <View>
              <Heading level={2}>Best honey EVER !!</Heading>
              <BlockSpacer spacing="base"></BlockSpacer>
              <Text size="base">
                After extensive research, tasting many different kinds of honey over the years and then actual tasting this honey, there is NO comparison and I will never purchase any other honey again but Bees & Trees Manuka honey, period.</Text>
            </View>
          </Grid>
        </View>
      </Grid>

      <Grid
        columns={['100%']}>
        <View>
          <Grid columns={['30%', '70%']} >
            <View padding="base">
              <Text>C</Text>
            </View>
            <View padding="base">
             
              <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/stars.png?v=1711707643" />  2/24/2024
              <Text size="base"> Verified</Text> <Heading>Char</Heading>
            </View>

          </Grid>
          <Grid columns="100%">
            <View>
              <Heading level={2}>Digestive Issues</Heading>
              <BlockSpacer spacing="base"></BlockSpacer>
              <Text size="base">
              Bees and Trees helped me with digestive issues especially after Covid two years ago. I have been taking ever since. I love this product!
              </Text>
            </View>
          </Grid>
        </View>
      </Grid>

      <Grid
        columns={['100%']} >
        <View>
          <Grid columns={['30%', '70%']} >
            <View padding="base">
              <Text>B</Text>
            </View>
            <View padding="base">
             
              <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/stars.png?v=1711707643" />  2/24/2024
              <Text size="base"> Verified</Text> <Heading>Barbara H.</Heading>
            </View>

          </Grid>
          <Grid columns="100%">
            <View>
              <Heading level={2}>Love manuka honey</Heading>
              <BlockSpacer spacing="base"></BlockSpacer>
              <Text size="base">
              I ordered the 4 pack of 550 mg for me and family members for Christmas. I loved it so l subscribed to the 830 mg to boost my immune system. It's very tasty! I eat a spoonful every day. Thank you Bees & Trees!
              </Text>
            </View>
          </Grid>
        </View>
      </Grid>

    </>
  );
}
