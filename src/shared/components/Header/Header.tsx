import { Flex, Image, Text } from '@chakra-ui/react';
import PersonRoundedIcon from '@components/PersonRoundedIcon';
import SearchBar from '@components/SearchBar';

export const Header = () => {
  return (
    <Flex height={'50px'} bgColor={'night.gray'} borderBottomWidth={'1px'} borderBottomColor={'night.black'}>
      <Image />
      <SearchBar />
      <PersonRoundedIcon />
      <Text>Sobre</Text>
      <>Icon 1</>
      <>Icon 2</>
    </Flex>
  );
};
