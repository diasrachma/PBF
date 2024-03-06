"use client";
import Accordion from "@/components/accordion";
import Tombol_1, {Tombol_2, Tombol_3} from "@/components/button";
import Messenger from "@/components/chat";
import Form, { Form_2 } from "@/components/form";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <>
    <div className="container mx-auto">
      <h2>Kuis Kota</h2>
      <Tombol_1 />
      <hr></hr>
    <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan"/>
    </div>
    <br></br>
    <div className="bg-red-300" onClick={() => alert('Parent Element : Div')}>
      <Tombol_3 isiPesan="Child Element : Tombol_1" namaTombol="Tombol_1"/>
      <Tombol_3 isiPesan="Child Element : Tombol_2" namaTombol="Tombol_2"/>  
    </div>
    <br></br>
    <Gallery/>
    <br></br>
    <Form/>
    <br></br>
    <Form_2/>
    <br></br>
    <Accordion/>
    <br></br>
    <Messenger/>
    </>
  );
}