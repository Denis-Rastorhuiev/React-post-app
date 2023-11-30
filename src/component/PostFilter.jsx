import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import imgMagnifyingGlass from "./../img/MagnifyingGlass.png"

const PostFilter = ({filter, setFilter,limit,setLimit}) => {
    return (
        <div style={{display:"flex",alignItems: "center",gap:"10px"}}>
            <div className={"searchPost"}>
                <MyInput
                    type="text"
                    placeholder="Search..."
                    value={filter.query}
                    className={"searchInput"}
                    onChange={ e => setFilter({...filter, query: e})}
                />
                <div className={"boxImgMagnifyingGlass"}>
                    <img className={"imgMagnifyingGlass"} src={imgMagnifyingGlass} alt={"Magnifying Glass"}/>
                </div>
            </div>
            <MySelect
                className={"middleSelect"}
                defaultOption={"Sort by..."}
                options={[{value: "title",text:"Title"},{value: "body",text:"Content"}]}
                value={filter.sort}
                onChange={sortSelect=>setFilter({...filter,sort:sortSelect})}
            />
            <MySelect
                className={"middleSelect"}
                value={limit}
                onChange={value => setLimit(value)}
                defaultOption={'Number of posts'}
                options={[
                    {value: 5, text: '5'},
                    {value: 10, text: '10'},
                    {value: 25, text: '25'},
                    {value: -1, text: 'Show all'}
                ]}
            />
        </div>
    );
};

export default PostFilter;