const Contact = () => {
  return (
    <div>
      <div className="text-lg font-bold m-2 p-2 text-center"><h1>contact page</h1></div>
      <form className="text-center m-2 p-2">
        <input placeholder="Name"  className="m-2 p-2 border bg-black text-white rounded-lg"/>
        <input placeholder="please Write your Query" className="m-2 p-2 border bg-black text-white rounded-lg" />
        <button className=" bg-blue-600 m-2 p-2 text-white rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
