import React from "react";
import { MdDelete } from "react-icons/md";


export default function TodoLists(props) {
  return (
   
      <div class="container-fluid inside">
       
        <button class="deletebtn "
          onClick={() => {
            props.RemoveBtn(props.id);
          }}
        >
          <MdDelete className="icon"/>
        </button>
        {props.lists}
      </div>

  );
}
