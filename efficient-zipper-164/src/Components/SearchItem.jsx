import { useState } from 'react';
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const famousKeywords = [
  
  'men',
  'jeans'
  // Add more famous keywords as needed
];

const products = [
   
];
const SearchItem = () => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
  
    const handleSearchChange = (event) => {
      const value = event.target.value;
      setSearchValue(value);
  
      if (value) {
        setShowDropdown(true);
  
        // Filter products based on the entered search value
        const filtered = products.filter((product) =>
          product.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setShowDropdown(false);
        setFilteredProducts([]);
      }
    };
  
    const handleTagClick = (tag) => {
      setSearchValue(tag);
      setShowDropdown(false);
      // Perform the search or any other action here
    };
  
    return (
      <Box p={4}>
        <InputGroup>
          <Input
            placeholder="Search for products..."
            value={searchValue}
            onChange={handleSearchChange}
            size={showDropdown ? 'md' : 'md'} // Change the size based on showDropdown state
          />
          <InputRightElement pointerEvents="none" children={<SearchIcon />} />
        </InputGroup>
  
        {showDropdown && (
          <Box  
          maxHeight="500px" // Adjust the maximum height of the dropdown
          overflowY="auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Tag
                  key={product}
                  size="sm" // Adjust the tag size here
                 display={'flex'}
                 flexDirection={'column'}
                  mr={1}
                  cursor="pointer"
                  onClick={() => handleTagClick(product)}
                >
                  <TagLabel>{product}</TagLabel>
                  <TagCloseButton />
                </Tag>
              ))
            ) : (
              <Box p={2} bg="gray.100" borderRadius="md">
                {famousKeywords.map((keyword) => (
                  <Tag
                    key={keyword}
                    size="sm" // Adjust the tag size here
                    borderRadius='md'
                    variant="solid"
                    colorScheme="blue"
                    display={'flex'}
                    flexDirection={'column'}
                    
                    cursor="pointer"
                    onClick={() => handleTagClick(keyword)}
                  >
                    <TagLabel>{keyword}</TagLabel>
                    <TagCloseButton />
                  </Tag>
                ))}
              </Box>
            )}
          </Box>
        )}
      </Box>
    );
  
}

export default SearchItem