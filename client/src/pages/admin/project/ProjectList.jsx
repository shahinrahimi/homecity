import React from 'react'
import ProjectForm from './ProjectForm'
const ProjectList = () => {

    // State for numeric props with default value 0
    const [startingPrice, setStartingPrice] = React.useState(0);
    const [totalArea, setTotalArea] = React.useState(0);
    const [totalNumberUnits, setTotalNumberUnits] = React.useState(0);
  
    // State for boolean props with default value false
    const [isPreSale, setIsPreSale] = React.useState(false);
    const [isInstallment, setIsInstallment] = React.useState(false);
    const [isHaveOpenPool, setIsHaveOpenPool] = React.useState(false);
    const [isHaveConveredPool, setIsHaveConveredPool] = React.useState(false);
    const [isHaveCentralAntenna, setIsHaveCentralAntenna] = React.useState(false);
    const [isHaveEmergencyPower, setIsHaveEmergencyPower] = React.useState(false);
    const [isHaveChildrenPlayground, setIsHaveChildrenPlayground] = React.useState(false);
    const [isHaveBasketballCourt, setIsHaveBasketballCourt] = React.useState(false);
    const [isHaveVolleyballCourt, setIsHaveVolleyballCourt] = React.useState(false);
    const [isHaveGym, setIsHaveGym] = React.useState(false);
    const [isHaveAirConditioningSystem, setIsHaveAirConditioningSystem] = React.useState(false);
    const [isHaveShop, setIsHaveShop] = React.useState(false);
    const [isHaveShoppingCenter, setIsHaveShoppingCenter] = React.useState(false);
    const [isHaveGreenSpace, setIsHaveGreenSpace] = React.useState(false);
    const [isHaveLobby, setIsHaveLobby] = React.useState(false);
    const [isHaveSalon, setIsHaveSalon] = React.useState(false);
    const [isHaveParking, setIsHaveParking] = React.useState(false);
    const [isHaveLaundry, setIsHaveLaundry] = React.useState(false);
    const [isHaveCafe, setIsHaveCafe] = React.useState(false);
    const [isHaveRestaurant, setIsHaveRestaurant] = React.useState(false);
    const [isHave24hSecurity, setIsHave24hSecurity] = React.useState(false);
    const [isHaveCCTV, setIsHaveCCTV] = React.useState(false);
    
    const form = React.useRef(null)
    const [title, setTitle] = React.useState("test")
    const [summary, setSummery] = React.useState("test")
    const [content, setContent] = React.useState("<h1>test</h1>")
    const [title_fa, setTitle_fa] = React.useState("test_fa")
    const [summary_fa, setSummery_fa] = React.useState("test_fa")
    const [content_fa, setContent_fa] = React.useState("<h1>test_fa</h1>")
    const [title_ar, setTitle_ar] = React.useState("test_ar")
    const [summary_ar, setSummery_ar] = React.useState("test_ar")
    const [content_ar, setContent_ar] = React.useState("<h1>test_ar</h1>")
    const [title_tr, setTitle_tr] = React.useState("test_tr")
    const [summary_tr, setSummery_tr] = React.useState("test_tr")
    const [content_tr, setContent_tr] = React.useState("<h1>test_tr</h1>")
    const [selectedTagIds, setSelectedTagIds] = React.useState([])
    const [files, setFiles] = React.useState("")

    const handleSubmit = () => {

    } 

  return (
    <>
      <ProjectForm
        form={form}
        title={title}
        setTitle={setTitle}
        summery={summary}
        setSummery={setSummery}
        content={content}
        setContent={setContent}

        title_fa={title_fa}
        setTitle_fa={setTitle_fa}
        summery_fa={summary_fa}
        setSummery_fa={setSummery_fa}
        content_fa={content_fa}
        setContent_fa={setContent_fa}

        title_ar={title_ar}
        setTitle_ar={setTitle_ar}
        summery_ar={summary_ar}
        setSummery_ar={setSummery_ar}
        content_ar={content_ar}
        setContent_ar={setContent_ar}

        title_tr={title_tr}
        setTitle_tr={setTitle_tr}
        summery_tr={summary_tr}
        setSummery_tr={setSummery_tr}
        content_tr={content_tr}
        setContent_tr={setContent_tr}

        selectedTagIds={selectedTagIds}
        setSelectedTagIds={setSelectedTagIds}

        setFiles={setFiles}
        buttonLabel={"create a project"}
        handleSubmit={handleSubmit}
      
        startingPrice={startingPrice}
        setStartingPrice={setStartingPrice}
        totalArea={totalArea}
        setTotalArea={setTotalArea}
        totalNumberUnits={totalNumberUnits}
        setTotalNumberUnits={setTotalNumberUnits}
        isPreSale={isPreSale}
        setIsPreSale={setIsPreSale}
        isInstallment={isInstallment}
        setIsInstallment={setIsInstallment}
        
        isHaveOpenPool={isHaveOpenPool}
        setIsHaveOpenPool={setIsHaveOpenPool}
        isHaveConveredPool={isHaveConveredPool}
        setIsHaveConveredPool={setIsHaveConveredPool}
        isHaveCentralAntenna={isHaveCentralAntenna}
        setIsHaveCentralAntenna={setIsHaveCentralAntenna}
        isHaveEmergencyPower={isHaveEmergencyPower}
        setIsHaveEmergencyPower={setIsHaveEmergencyPower}
        isHaveChildrenPlayground={isHaveChildrenPlayground}
        setIsHaveChildrenPlayground={setIsHaveChildrenPlayground}
        isHaveBasketballCourt={isHaveBasketballCourt}
        setIsHaveBasketballCourt={setIsHaveBasketballCourt}
        isHaveVolleyballCourt={isHaveVolleyballCourt}
        setIsHaveVolleyballCourt={setIsHaveVolleyballCourt}
        isHaveGym={isHaveGym}
        setIsHaveGym={setIsHaveGym}
        isHaveAirConditioningSystem={isHaveAirConditioningSystem}
        setIsHaveAirConditioningSystem={setIsHaveAirConditioningSystem}
        isHaveShop={isHaveShop}
        setIsHaveShop={setIsHaveShop}
        isHaveShoppingCenter={isHaveShoppingCenter}
        setIsHaveShoppingCenter={setIsHaveShoppingCenter}
        isHaveGreenSpace={isHaveGreenSpace}
        setIsHaveGreenSpace={setIsHaveGreenSpace}
        isHaveLobby={isHaveLobby}
        setIsHaveLobby={setIsHaveLobby}
        isHaveSalon={isHaveSalon}
        setIsHaveSalon={setIsHaveSalon}
        isHaveParking={isHaveParking}
        setIsHaveParking={setIsHaveParking}
        isHaveLaundry={isHaveLaundry}
        setIsHaveLaundry={setIsHaveLaundry}
        isHaveCafe={isHaveCafe}
        setIsHaveCafe={setIsHaveCafe}
        isHaveRestaurant={isHaveRestaurant}
        setIsHaveRestaurant={setIsHaveRestaurant}
        isHave24hSecurity={isHave24hSecurity}
        setIsHave24hSecurity={setIsHave24hSecurity}
        isHaveCCTV={isHaveCCTV}
        setIsHaveCCTV={setIsHaveCCTV}
      />
    </>
  )
}

export default ProjectList