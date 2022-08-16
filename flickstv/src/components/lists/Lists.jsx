import React from 'react';
import "./lists.scss";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import Listitems from '../../components/listitems/Listitems';
import { useRef, useState } from 'react';

export default function Lists({ list }) {

    // console.log("list in jx", list.content);

    const refList = useRef();
    const [slideNum, setSlideNum] = useState(0);
    const clickHandle = (direction) => {
        let distance = refList.current.getBoundingClientRect().x - 55;
        if (direction === "left" && slideNum > 0) {
            // console.log('d is', refList.current.getBoundingClientRect());
            setSlideNum(slideNum - 1);
            refList.current.style.transform = `translateX(${620 + distance}px)`;

        }
        if (direction === "right" && slideNum < 2) {
            // console.log('d r is', refList.current.getBoundingClientRect());
            setSlideNum(slideNum + 1);
            refList.current.style.transform = `translateX(${-620 + distance}px)`;

        }
    };

    return (
        <div className='lists'>
            <span className='liTitle'>{list.listTitle}</span>
            <div className="wrapperCls">
                <ArrowBackIosOutlined className='arrow left' onClick={() => clickHandle("left")} />
                <div className='container' ref={refList}>
                    {/* <Listitems index={0} />
                    <Listitems index={1} />
                    <Listitems index={2} />
                    <Listitems index={3} />
                    <Listitems index={4} />
                    <Listitems index={5} />
                    <Listitems index={6} />
                    <Listitems index={7} />
                    <Listitems index={8} />
                    <Listitems index={9} /> */}

                    {list.content.map((item, i) => (
                        <Listitems index={i} item={item} />
                    ))}
                </div>
                <ArrowForwardIosOutlined className='arrow right' onClick={() => clickHandle("right")} />
            </div>
        </div>

    )
}
