
export default async function chat({params}: {params: {id: string}}) {
    const {id} = await params;


    console.log(id);

    console.log("chat component rendered");
    return <h1>chat: {id}</h1>;
    
}