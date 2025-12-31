const Code = ({ ...props }) => {
  const filteredProps = Object.fromEntries(
    Object.entries(props || {}).filter(
      ([_, value]) =>
        value !== undefined && value !== null && value !== "" && value !== false
    )
  );

  return (
    <code className="block mb-2">
      {`    <Accordion defaultValue="item-1" type="single" collapsible ${Object.entries(
        filteredProps
      )
        .map(([key, value]) =>
          value === true ? `${key}` : `${key}="${value}"`
        )
        .join(" ")}>
      <AccordionItem value="item-1" {...(props || {})}>
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" {...(props || {})}>
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" {...(props || {})}>
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent
          {...(props?.accordionContent || {})}
          className="flex flex-col gap-4 text-balance"
        >
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>`}
    </code>
  );
};

export default Code;
