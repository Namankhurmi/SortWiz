

function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"black");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#5F8F9C");//Color update
                div_update(divs[j+1],div_sizes[j+1], "#5F8F9C");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#5F8F9C");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#5F8F9C");//Height update
            }
            div_update(divs[j],div_sizes[j], "grey");//Color updat
        }
        div_update(divs[j],div_sizes[j], "indianred");//Color update
    }
    div_update(divs[0],div_sizes[0], "indianred");//Color update

    enable_buttons();
}

