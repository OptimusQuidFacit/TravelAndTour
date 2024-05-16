import Summary from "@/components/summary/Summary";
import { auth } from "@/lib/auth";
import { Suspense } from "react";

const page = async ({params}) => {
    const paystackKey= process.env.PAYSTACK_KEY;
    const {slug} = params;
    const id= slug.split('%')[0];
    console.log(id);
    const user = (await auth()).user;
    return (
        <div>
                <Summary id={id} user={user} paystackKey={paystackKey}/>
        </div>
    );
}

export default page;