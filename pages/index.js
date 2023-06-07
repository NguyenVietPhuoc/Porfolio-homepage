import NextLink from 'next/link'
import {
  Link, 
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import GridItem from '..components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYoutube from '../public/images/links/youtube.png'
import thubInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  <Layout>
    <Container>
      <Box
        borderRadius="lg"  
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backgroundFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in VietNam!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="2" variant="page-title">
            Nguyen Viet Phuoc
          </Heading>
          <p>Digital Craftsman (Artist / Developer / Designer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"  
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/avatar.jpg"  
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Nguyen Viet Phuoc a freelance and a full-stack developer based in Vietnam with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called{' '}
          <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link> 
          . He publishes content for marketting his products and his Youtube channel call &quot;
          <Link
            as={NextLink}  
            href="https://www.youtube.com/devaslife"
            passHref 
            target="_blank"
          >
            Dev as life
          </Link>
          &quot; has more than 100k subscribers
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>


      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio 
        </Heading>
        <BioSection>
          <BioYear>
            2002
          </BioYear>
          Born in VietNam (Yuènán rén). 
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Completed the Master&apos;s Program in the Graduate School of Information Science at Bach Khoa Institute of Science and Technology
        </BioSection>
        <BioSection>
          <BioYear>
            2026
          </BioYear>
          Worked at Zalo! VietNam
        </BioSection>
        <BioSection>
          <BioYear>
            Present
          </BioYear>
          Working as a freelancer
        </BioSection>
      </Section>
    </Container>
  </Layout>
}
