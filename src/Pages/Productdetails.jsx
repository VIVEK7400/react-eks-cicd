import React, { useEffect, useState } from 'react';
import { Card, Text, VStack, TagGroup, Tag, Table, Divider, Input, Toggle, TagPicker, HStack, SelectPicker, Button, Dropdown, ButtonGroup, Whisper, IconButton, Popover } from 'rsuite';
import { p1, pro1, pro2, pro3, pro4, pro5, pro6 } from "../Elements/imports";
import { Navbar } from "../Components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import ArrowDownIcon from '@rsuite/icons/ArrowDown';

export const Selection = () => {
    const options = [
        'Wast-Heat Recovery Boiler', 
        'AFBC BOILER', 
        'SOLID FUAL HMT BOILER', 
        'RICEMILL BOILER', 
        'RADIANT EXPERNAL FURNACE WATER WALL BOILER', 
        'OIL/GAS FIRED BOILER'
    ];
    const [action, setAction] = React.useState(0);
    return (
        <>
            <div className='row'>
                <div className='col-sm-12' style={{ textAlign: 'right' }}>
                    <ButtonGroup style={{ marginTop: '5%', marginBottom: '20px' }}>
                        <Button appearance="" color="">
                            {options[action]}
                        </Button>
                        <Whisper
                            placement="bottomEnd"
                            trigger="click"
                            speaker={({ onClose, left, top, className }, ref) => {
                                const handleSelect = eventKey => {
                                    onClose();
                                    setAction(eventKey);
                                    console.log(eventKey);
                                };
                                return (
                                    <Popover ref={ref} className={className} style={{ left, top }} full>
                                        <Dropdown.Menu onSelect={handleSelect}>
                                            {options.map((item, index) => (
                                                <Dropdown.Item key={index} eventKey={index}>
                                                    {item}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Popover>
                                );
                            }}
                        >
                            <IconButton appearance="" color="" icon={<ArrowDownIcon />} />
                        </Whisper>
                    </ButtonGroup>
                </div>
            </div>
        </>
    )
}

export const ProductDetails1 = () => {
    // const DropDownData=[
    //     {label: 'WASTE HEAT RECOVERY BOILER (WHRB)', value: 'WASTE HEAT RECOVERY BOILER (WHRB)'}
    // ]
    return (
        <>
            <Navbar />
            <div className="container-fluid" style={{ width: '90%', }}>
                <Selection />
                {/* <SelectPicker className="mt-4 mb-4" label="Boiler" id="boiler-type" size="lg" data={DropDownData} defaultValue={'WASTE HEAT RECOVERY BOILER (WHRB)'} style={{ width: "100%" }} /> */}
                <Card shaded >
                    <div className="row">
                        <div className="col-sm-3 bg-warning">
                            <center><img src={''} alt="" width={'300px'} style={{ margin: '10%' }} /></center>
                        </div>
                        <div className="col-sm-9 p-5">
                            <h3 style={{ color: 'orangered' }}>WASTE HEAT RECOVERY BOILER (WHRB)</h3>
                            <table className="table table-bordered mt-4" >
                                <tbody>
                                    <tr>
                                        <th>Capacity</th>
                                        <td>1 TPH - 10 TPH</td>
                                    </tr>
                                    <tr>
                                        <th>Pressure</th>
                                        <td>7 Kg/cm2 - 10.5 Kg/cm2</td>
                                    </tr>
                                    <tr>
                                        <th>Fuel</th>
                                        <td>WASTE HEAT</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="row">
                                <div className="col-sm">
                                    <h5>Product Description</h5>
                                    <p style={{
                                        maxHeight: '100px',
                                        overflowY: 'scroll',
                                        border: '0px solid #ddd',
                                        // padding: '10px',
                                        borderRadius: '5px',
                                        textAlign: 'justify',
                                        paddingRight: '10px'
                                    }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse alias autem unde odio in aliquam fugiat
                                        distinctio illo eius, corrupti magni qui. Mollitia facilis vitae sequi nostrum cum recusandae quidem!
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse alias autem unde odio in aliquam fugiat
                                        distinctio illo eius, corrupti magni qui. Mollitia facilis vitae sequi nostrum cum recusandae quidem!
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse alias autem unde odio in aliquam fugiat
                                        distinctio illo eius, corrupti magni qui. Mollitia facilis vitae sequi nostrum cum recusandae quidem!
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse alias autem unde odio in aliquam fugiat
                                        distinctio illo eius, corrupti magni qui. Mollitia facilis vitae sequi nostrum cum recusandae quidem!
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse alias autem unde odio in aliquam fugiat
                                        distinctio illo eius, corrupti magni qui. Mollitia facilis vitae sequi nostrum cum recusandae quidem!
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 text-end">
                                        <Link to='/enquiry'>
                                            <Button color="orange" appearance="primary">
                                                <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                                                Enquiry
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-sm-4 p-5">
                            <SelectPicker label="Boiler" id="boiler-type" size="lg" defaultValue={'WASTE HEAT RECOVERY BOILER (WHRB)'} disabled style={{ width: "100%" }} />
                            <label>Boiler Type</label>
                            <Input label="Boiler" id="boiler-type" size="lg" defaultValue={'WASTE HEAT RECOVERY BOILER (WHRB)'} disabled/>

                        </div> */}

                    </div>
                </Card>
            </div>
        </>
    )
}

export const ProductDetails2 = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid" style={{ width: '90%', marginTop: '5%' }}>
                <Card shaded>
                    <div className="row">
                        <div className="col-sm-3 bg-warning">
                            <center><img src={pro2} alt="" width={'300px'} style={{ margin: '10%' }} /></center>
                        </div>
                        <div className="col-sm-2 p-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt sint neque nostrum facere tempore ipsa odio ut corporis itaque impedit soluta ipsum, aperiam consequuntur aut? Fugit aperiam assumenda natus!
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export const ProductDetails3 = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid" style={{ width: '90%', marginTop: '5%' }}>
                <Card shaded>
                    <div className="row">
                        <div className="col-sm-3 bg-warning">
                            <center><img src={pro3} alt="" width={'300px'} style={{ margin: '10%' }} /></center>
                        </div>
                        <div className="col-sm-2 p-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt sint neque nostrum facere tempore ipsa odio ut corporis itaque impedit soluta ipsum, aperiam consequuntur aut? Fugit aperiam assumenda natus!
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export const ProductDetails4 = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid" style={{ width: '90%', marginTop: '5%' }}>
                <Card shaded>
                    <div className="row">
                        <div className="col-sm-3 bg-warning">
                            <center><img src={pro4} alt="" width={'300px'} style={{ margin: '10%' }} /></center>
                        </div>
                        <div className="col-sm-2 p-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt sint neque nostrum facere tempore ipsa odio ut corporis itaque impedit soluta ipsum, aperiam consequuntur aut? Fugit aperiam assumenda natus!
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export const ProductDetails5 = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid" style={{ width: '90%', marginTop: '5%' }}>
                <Card shaded>
                    <div className="row">
                        <div className="col-sm-3 bg-warning">
                            <center><img src={pro5} alt="" width={'300px'} style={{ margin: '10%' }} /></center>
                        </div>
                        <div className="col-sm-2 p-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt sint neque nostrum facere tempore ipsa odio ut corporis itaque impedit soluta ipsum, aperiam consequuntur aut? Fugit aperiam assumenda natus!
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export const ProductDetails6 = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid" style={{ width: '90%', marginTop: '5%' }}>
                <Card shaded>
                    <div className="row">
                        <div className="col-sm-3 bg-warning">
                            <center><img src={pro6} alt="" width={'300px'} style={{ margin: '10%' }} /></center>
                        </div>
                        <div className="col-sm-2 p-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt sint neque nostrum facere tempore ipsa odio ut corporis itaque impedit soluta ipsum, aperiam consequuntur aut? Fugit aperiam assumenda natus!
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}





