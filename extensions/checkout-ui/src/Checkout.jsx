
import {
  Heading,
  reactExtension,
  Grid,
  View,
  BlockStack,
  Text,
  Image,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  return (

    <>
      <Heading inlineAlignment="center" level={1} >Manuka Honey You Can Trust</Heading>
      <Grid
        columns={['50%', '50%']}

      >

        <View>
          <Grid
            columns={['35%', '65%']}

          >
            <View>
            <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/logo-1.png?v=1711707643" />
              <Image source="./images/logo-1.png" />
            </View>
            <View padding="base">

              <BlockStack inlineAlignment="left">
                <Heading>GenuHoney</Heading>
                <Text size="base">

                  Authenticity Certified</Text>

              </BlockStack>
            </View>

          </Grid>
        </View>
        <View padding="base">
          <Grid
            columns={['35%', '65%']}

          >
            <View>
              <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/logo-2.png?v=1711707643" />
            </View>
            <View padding="base">

              <BlockStack inlineAlignment="left">
                <Heading>100% </Heading>
                <Text size="base">
                  Satisfaction Guaranteed</Text>

              </BlockStack>
            </View>

          </Grid>
        </View>
        <View padding="base">
          <Grid
            columns={['35%', '65%']}

          >
            <View>
              <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/logo-3.png?v=1711707643" />
            </View>
            <View padding="base">

              <BlockStack inlineAlignment="left">
                <Heading>New Zealand.com  </Heading>
                <Text size="base">
                  License no. 100293</Text>

              </BlockStack>
            </View>

          </Grid>
        </View>
        <View padding="base">
          <Grid
            columns={['35%', '65%']}

          >
            <View>
              <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/logo-4.png?v=1711707643" />
            </View>
            <View padding="base">

              <BlockStack inlineAlignment="left">
                <Heading>Glyphosate
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
        <View padding="base">
          <Heading inlineAlignment="center">What our Customers are Saying</Heading>
        </View>

      </Grid>
      <Grid
        columns={['100%']}>
        <View>
          <Grid columns={['40%', '60%', '100%']}>
            <View padding="base">
              <Text>R</Text>
            </View>
            <View padding="base">
             
              <Image source="https://cdn.shopify.com/s/files/1/0183/9570/t/65/assets/stars.png?v=1711707643" />  2/24/2024
              <Text size="base">Verified</Text> <Heading>Martin M.</Heading>
            </View>

          </Grid>
          <Grid columns="100%">
            <View padding="base">
              <Heading>Best honey EVER !!</Heading>
              <Text size="base">
                After extensive research, tasting many different kinds of honey over the years and then actual tasting this honey, there is NO comparison and I will never purchase any other honey again but Bees & Trees Manuka honey, period.</Text>
            </View>
          </Grid>
        </View>
      </Grid>

    </>
  );
}
