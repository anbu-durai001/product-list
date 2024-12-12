import React,{useState,useEffect} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  MenuItem,
  Select,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Rating,
  Badge,
  Pagination,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductDataRequest} from '../redux/product/Action';
import {fetchProductCategoryRequest} from '../redux/product/ActionCategory';
import {fetchProductFilterCategoryRequest} from '../redux/product/ActionFilterCategory';
import {fetchProductSearchFilterRequest} from '../redux/product/ActionSearchFilter';

const ProductComponent = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [productList, setProductList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 6;

  const loginStatus = useSelector((state) => state.ProductReducer.data); 
  const category = useSelector((state)=>state.ProductCategoryReducer.list);
  const filterCategoryProduct = useSelector((state)=> state.ProductCategoryFilterReducer.filterList);
  const searchFilterProduct = useSelector((state)=> state.ProductSearchFilterReducer.searchList);

  
   useEffect(()=>{
      dispatch(fetchProductDataRequest());
      dispatch(fetchProductCategoryRequest());
  },[dispatch]);

  useEffect(() => {
    if (!selectedCategory && !searchFilter) {
      setProductList(loginStatus?.products || []); 
    } else if (!searchFilter) {
      setProductList(filterCategoryProduct?.products || []); 
    } else {
      setProductList(searchFilterProduct?.products || []); 
    }
    setCurrentPage(1); 
  }, [loginStatus, filterCategoryProduct, searchFilterProduct, selectedCategory, searchFilter]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    console.log('category....', category )
    if (category) {
      console.log('===category', category)
      dispatch(fetchProductFilterCategoryRequest(category));
    } else {
      dispatch(fetchProductDataRequest());
    }
  };

  const searchProduct=(event)=>{
    const value = event.target.value;
    setSearchFilter(value)
    if(value){
      dispatch(fetchProductSearchFilterRequest(value))
    }else{
      dispatch(fetchProductDataRequest());
    }
  }

  const toggleSelection = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((itemId) => itemId !== id) 
        : [...prevSelectedItems, id] 
    );
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value); 
  };
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#000" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            MoBooM
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: 2,
                padding: "2px 8px",
              }}
            >
              <InputBase placeholder="Search..." sx={{ ml: 1 }} onChange={searchProduct} />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Box>
            <Typography>Store</Typography>
            <Typography>Account</Typography>
            <Typography>Wish List</Typography>
            <IconButton>
              <Badge badgeContent={selectedItems.length || 0} color="error">
                <ShoppingCartIcon />
              </Badge>
            
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          background: "linear-gradient(to right, #000, #9b4956)",
          color: "#fff",
          textAlign: "center",
          py: 2,
        }}
      >
        <Typography>
          Lorem Ipsum: Slash Sales begins in June. Get up to 80% Discount on all
          products Read More...
        </Typography>
      </Box>

      <Box sx={{ mt: 3, px: 3 }}>
        <Select 
          fullWidth 
          defaultValue="" 
          displayEmpty 
          sx={{
            width: {
              xs: "100%",
              sm: "50%",  
              md: "30%", 
            },
            display:"flex",
            justifyContent: 'flex-start',
          }}
        >
          <MenuItem value="">Select Category</MenuItem>
          {category&& category.map((list, index)=>(
            <MenuItem key={index} value={list.name} onClick={()=>handleCategoryChange(list.slug)}>{list.name}</MenuItem>))}
        </Select>
      </Box>

      <Grid container spacing={3} sx={{ mt: 3, px: 3 }}>
        {currentItems?.map((list, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <IconButton
                sx={{ position: "relative", top: 8, right: 8, left:195 }}
                onClick={() => toggleSelection(list.id)}
              >
                {selectedItems.includes(list.id) ? (
                  <FavoriteIcon color="error" /> 
                ) : (
                  <FavoriteBorderIcon /> 
                )}
              </IconButton>
              <CardMedia
                component="img"
                height="150"
                image={list.images}
                alt={list.name}
              />
              <CardContent>
                <Typography variant="h6">{list.brand}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {list.description}
                </Typography>
                <Typography variant="body1" fontWeight="bold">
                  {list.price}
                </Typography>
                <Rating
                  name={`rating-${index}`}
                  value={list.rating || 0} 
                  precision={0.5} 
                  readOnly 
                  sx={{ mt: 1 }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
      <Pagination
        count={Math.ceil(productList.length / itemsPerPage)} 
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
      />
    </Box>
    </>
  );
};

export default ProductComponent;
