import React from "react";
import { render } from "react-dom";
import * as cornerstone from "cornerstone-core";
import * as cornerstoneMath from "cornerstone-math";
import * as cornerstoneTools from "cornerstone-tools";
import Hammer from "hammerjs";
import * as cornerstoneWebImageLoader from "cornerstone-web-image-loader";
import { Box, Typography } from '@mui/material';
import { VscColorMode } from "react-icons/vsc";
import { MdOutlineZoomIn } from "react-icons/md";
import { Tooltip } from "@mui/material";
import { IoMdMove } from "react-icons/io";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import { FaArrowRotateLeft } from "react-icons/fa6";

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;

const imageId1 = "https://res.cloudinary.com/dnmy80tpe/image/upload/v1713888780/ge8rmbrks035pfyjlnwz.jpg";
const imageId2 = "https://res.cloudinary.com/dnmy80tpe/image/upload/v1714304994/resized_image_n3iopp.jpg";

const images = [imageId1, imageId2]

class CornerstoneElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: props.stack,
      viewport: cornerstone.getDefaultViewport(null, undefined),
      imageId: props.stack.imageIds[0]
    };

    this.onImageRendered = this.onImageRendered.bind(this);
    this.onNewImage = this.onNewImage.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  render() {
    return (
    <Box sx={{ width: '100vw', height: '100vh' }}>
      <Box sx={{ width: '100vw', height: '5vw' }}>Hashir2</Box>
      <Box sx={{ width: '100vw', height: 'calc(100vh - 5vw)', display: 'flex', flexDirection: 'row'}}>
        <Box sx={{ height: '100%', padding: '10px' }}>
          <Box sx={{ background: 'rgba(0, 0, 0, 0.2)', height: '180px', marginBottom: '10px', paddingTop: '10px', display: 'flex', flexDirection: 'column', borderRadius: '5px' }}>
            <Typography sx={{ height: '30px', background: 'rgba(0, 0, 0, 0.4)', marginRight: '10px', marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>General</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Tooltip title='wwwc' arrow>
                <Box sx={{ marginRight: '10px', marginLeft: '15px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }}><VscColorMode style={{fontSize: '26px'}}/></Box>
              </Tooltip>
              <Tooltip title='scale' arrow>
                <Box sx={{ marginRight: '10px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }}><MdOutlineZoomIn style={{fontSize: '32px'}}/></Box>
              </Tooltip>
              <Tooltip title='move' arrow>
                <Box sx={{ marginRight: '15px', marginTop: '10px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0, 0, 0, 0.4)', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer' }, borderRadius: '5px' }}><IoMdMove style={{fontSize: '26px'}}/></Box>
              </Tooltip>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Tooltip arrow title='magnify'>
                <Box sx={{ marginRight: '10px', marginLeft: '15px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }}><PiMagnifyingGlassFill style={{fontSize: '30px'}}/></Box>
              </Tooltip>
              <Tooltip arrow title='rotate'>
                <Box sx={{ marginRight: '10px', marginTop: '10px', color: 'rgba(0, 0, 0, 0.4)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', '&:hover': { border: '2px solid rgba(0, 0, 0, 0.4)', cursor: 'pointer', borderRadius: '5px' } }}><FaArrowRotateLeft style={{fontSize: '24px'}}/></Box>
              </Tooltip>
            </Box>
            <Box sx={{ height: '30px', marginTop: '10px', marginRight: '10px', marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ width: '40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ width: '10px', height: '10px', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '50%',  }}></Box>
                <Box sx={{ width: '10px', height: '10px', border: '2px solid rgba(0, 0, 0, 0.4)', borderRadius: '50%' }}></Box>
                <Box sx={{ width: '10px', height: '10px', border: '2px solid rgba(0, 0, 0, 0.4)', borderRadius: '50%' }}></Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ background: 'rgba(0, 0, 0, 0.2)', height: '440px', paddingTop: '10px', borderRadius: '5px' }}>
            <Typography sx={{ height: '30px', background: 'rgba(0, 0, 0, 0.4)', marginRight: '10px', marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Gallery</Typography>
            <Box>
              <img src={images[0]} alt='Image' width='150px' height='150px' style={{ margin: '10px', border: '4px solid', borderImage: 'linear-gradient(to bottom, #0ea190, #11b97c) 1' }}/>
              <Typography sx={{ height: '20px', fontSize: '14px', color: '#616161' }} textAlign='center'>Generated Image</Typography>
            </Box>
            <Box>
              <img src={images[1]} alt='Image' width='150px' height='150px' style={{ margin: '10px', border: '4px solid #616161' }}/>
              <Typography sx={{ height: '20px', fontSize: '14px', color: '#616161' }} textAlign='center'>Segmented Mask</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: 'calc(100vw - 490px)', height: '100%', padding: '10px', borderRadius: '5px' }}>
          <Box sx={{ background: 'rgba(0, 0, 0, 0.3)', height: '100%', padding: '5px', borderRadius: '5px' }}>
          <Box ref={input => { this.element = input; }} style={{ width: '100%', height: '100%', background: 'black', borderRadius: '5px' }}>
            <canvas style={{ display: 'none' }}/>
          </Box>
          </Box>
        </Box>
        <Box sx={{ width: '300px', height: '100%', padding: '10px' }}>
          <Box sx={{ width: '100%', height: '210px', background: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '5px' }}>
            <Typography sx={{ height: '30px', background: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Properties</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ marginTop: '10px', height: '30px', width: '70px', fontSize: '16px', color: '#616161', display: 'flex', alignItems: 'center', marginRight: '10px' }}>ww/wc</Box>
              <Box sx={{ marginTop: '10px' }}>
                <input type='number' style={{ width: '80px', height: '30px', borderRadius: '5px', padding: '5px', border: '2px solid rgba(0, 0, 0, 0.4)' }}/>
              </Box>              
              <Box sx={{ marginTop: '10px', width: '20px', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0, 0, 0, 0.4)' }}>/</Box>              
              <Box sx={{ marginTop: '10px' }}>
                <input type='number' style={{ width: '80px', height: '30px', borderRadius: '5px', padding: '5px', border: '2px solid rgba(0, 0, 0, 0.4)' }}/>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ marginTop: '10px', height: '30px', width: '70px', fontSize: '16px', color: '#616161', display: 'flex', alignItems: 'center', marginRight: '10px' }}>scale</Box>              
              <Box sx={{ marginTop: '10px' }}>
                <input type='number' style={{ width: '180px', height: '30px', borderRadius: '5px', padding: '5px', border: '2px solid rgba(0, 0, 0, 0.4)' }}/>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ marginTop: '10px', height: '30px', width: '70px', fontSize: '16px', color: '#616161', display: 'flex', alignItems: 'center', marginRight: '10px' }}>rotate</Box>              
              <Box sx={{ marginTop: '10px' }}>
                <input type='number' style={{ width: '180px', height: '30px', borderRadius: '5px', padding: '5px', border: '2px solid rgba(0, 0, 0, 0.4)' }}/>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ marginTop: '10px', height: '30px', width: '70px', fontSize: '16px', color: '#616161', display: 'flex', alignItems: 'center', marginRight: '10px' }}>locate</Box>
              <Box sx={{ marginTop: '10px' }}>
                <input type='number' style={{ width: '80px', height: '30px', borderRadius: '5px', padding: '5px', border: '2px solid rgba(0, 0, 0, 0.4)' }}/>
              </Box>              
              <Box sx={{ marginTop: '10px', width: '20px', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>,</Box>              
              <Box sx={{ marginTop: '10px' }}>
                <input type='number' style={{ width: '80px', height: '30px', borderRadius: '5px', padding: '5px', border: '2px solid rgba(0, 0, 0, 0.4)' }}/>
              </Box>
            </Box>
          </Box>
          <Box sx={{ background: 'rgba(0, 0, 0, 0.2)', marginTop: '10px', height: '410px', padding: '10px', borderRadius: '5px' }}>
            <Typography sx={{ height: '30px', background: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', borderRadius: '5px' }}>Layers</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    );
  }

  onWindowResize() {
    console.log("onWindowResize");
    cornerstone.resize(this.element);
  }

  onImageRendered() {
    const viewport = cornerstone.getViewport(this.element);
    console.log(viewport);

    this.setState({
      viewport
    });

    console.log(this.state.viewport);
  }

  onNewImage() {
    const enabledElement = cornerstone.getEnabledElement(this.element);

    this.setState({
      imageId: enabledElement.image.imageId
    });
  }

  componentDidMount() {
    const element = this.element;

    cornerstoneTools.init();
    
    cornerstone.enable(element);
    // Load the first image in the stack
    cornerstone.loadImage(this.state.imageId).then(image => {
      // Display the first image
      cornerstone.displayImage(element, image);
      const viewport = cornerstone.getViewport(element); 
      viewport.scale = 1; 
      cornerstone.setViewport(element, viewport);
      // Add the stack tool state to the enabled element
      const stack = this.props.stack;
      cornerstoneTools.addStackStateManager(element, ["stack"]);
      cornerstoneTools.addToolState(element, "stack", stack);

      // cornerstoneTools.touchInput.enable(element);
      // cornerstoneTools.panTouchDrag.activate(element);
      // cornerstoneTools.zoomTouchPinch.activate(element);
      
      const PanTool = cornerstoneTools.PanTool;
      cornerstoneTools.addTool(PanTool)
      cornerstoneTools.setToolActive('Pan', { mouseButtonMask: 1 })

      element.addEventListener(
        "cornerstoneimagerendered",
        this.onImageRendered
      );
      element.addEventListener("cornerstonenewimage", this.onNewImage);
      window.addEventListener("resize", this.onWindowResize);
    });
  }

  componentWillUnmount() {
    const element = this.element;
    element.removeEventListener(
      "cornerstoneimagerendered",
      this.onImageRendered
    );

    element.removeEventListener("cornerstonenewimage", this.onNewImage);

    window.removeEventListener("resize", this.onWindowResize);

    cornerstone.disable(element);
  }

  componentDidUpdate(prevProps, prevState) {
    const stackData = cornerstoneTools.getToolState(this.element, "stack");
    const stack = stackData.data[0];
    stack.currentImageIdIndex = this.state.stack.currentImageIdIndex;
    stack.imageIds = this.state.stack.imageIds;
    cornerstoneTools.addToolState(this.element, "stack", stack);

    //const imageId = stack.imageIds[stack.currentImageIdIndex];
    //cornerstoneTools.scrollToIndex(this.element, stack.currentImageIdIndex);
  }
}

const stack = {
  imageIds: images,
  currentImageIdIndex: 0
};

const Editor = () => {
  return (
    <Box>
      <CornerstoneElement stack={{ ...stack }} />
    </Box>
  )
}

export default Editor
