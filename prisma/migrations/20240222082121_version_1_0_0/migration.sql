-- CreateTable
CREATE TABLE "Course" (
    "ID" SERIAL NOT NULL,
    "Title" VARCHAR(100) NOT NULL,
    "Description" VARCHAR NOT NULL,
    "Duration" DOUBLE PRECISION NOT NULL,
    "Diffculty" VARCHAR NOT NULL,
    "Rating" DECIMAL(65,30) NOT NULL,
    "CreatedDate" TIMESTAMP(3) NOT NULL,
    "ModifiedDate" TIMESTAMP(3) NOT NULL,
    "SLAG" VARCHAR NOT NULL,
    "certificateID" INTEGER,
    "domainID" INTEGER,
    "subscriptionsPlanID" INTEGER,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Purchasehistory" (
    "ID" SERIAL NOT NULL,
    "PurchaseDate" TIMESTAMP(3) NOT NULL,
    "Status" VARCHAR NOT NULL,
    "paymentID" INTEGER NOT NULL,
    "subscriberID" INTEGER,
    "subscriptionsPlanID" INTEGER,

    CONSTRAINT "Purchasehistory_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Payment" (
    "ID" SERIAL NOT NULL,
    "TransactionNo" VARCHAR NOT NULL,
    "Amount" DECIMAL(65,30) NOT NULL,
    "PaymentDate" TIMESTAMP(3) NOT NULL,
    "subscriptionID" INTEGER NOT NULL,
    "subscriberID" INTEGER,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "ID" SERIAL NOT NULL,
    "StartDate" TIMESTAMP(3) NOT NULL,
    "EndDate" TIMESTAMP(3) NOT NULL,
    "Status" VARCHAR NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Subscriber" (
    "ID" SERIAL NOT NULL,
    "Username" VARCHAR NOT NULL,
    "FirstName" VARCHAR NOT NULL,
    "LastName" VARCHAR NOT NULL,
    "Email" VARCHAR NOT NULL,
    "Phone" VARCHAR NOT NULL,
    "Address" VARCHAR NOT NULL,
    "City" VARCHAR NOT NULL,
    "State" VARCHAR NOT NULL,
    "Country" VARCHAR NOT NULL,
    "PostalCode" VARCHAR NOT NULL,
    "IsActivated" BOOLEAN NOT NULL,
    "CreateDate" TIMESTAMP(3) NOT NULL,
    "authID" INTEGER NOT NULL,

    CONSTRAINT "Subscriber_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Auth" (
    "ID" SERIAL NOT NULL,
    "Email" VARCHAR NOT NULL,
    "Password" VARCHAR NOT NULL,
    "rolesID" INTEGER,

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "ID" SERIAL NOT NULL,
    "subscriberID" INTEGER,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Topicprogress" (
    "ID" SERIAL NOT NULL,
    "Progress" DECIMAL(65,30) NOT NULL,
    "subscriberID" INTEGER,
    "chapterID" INTEGER,
    "topicID" INTEGER,

    CONSTRAINT "Topicprogress_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "ID" SERIAL NOT NULL,
    "Title" VARCHAR NOT NULL,
    "Description" VARCHAR NOT NULL,
    "Order" INTEGER NOT NULL,
    "SLAG" VARCHAR NOT NULL,
    "DESC" VARCHAR NOT NULL,
    "DUR" INTEGER NOT NULL,
    "ModifiedDate" TIMESTAMP(3) NOT NULL,
    "SerialNo" INTEGER NOT NULL,
    "courseID" INTEGER,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Topic" (
    "ID" SERIAL NOT NULL,
    "Title" VARCHAR NOT NULL,
    "Description" VARCHAR NOT NULL,
    "Order" INTEGER NOT NULL,
    "CreatedDate" TIMESTAMP(3) NOT NULL,
    "ModifiedDate" TIMESTAMP(3) NOT NULL,
    "chapterID" INTEGER,
    "topicTypesID" INTEGER,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "TopicTypes" (
    "ID" SERIAL NOT NULL,
    "Type" VARCHAR NOT NULL,

    CONSTRAINT "TopicTypes_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Domain" (
    "ID" SERIAL NOT NULL,
    "Title" VARCHAR NOT NULL,
    "Description" VARCHAR NOT NULL,
    "CreatedDate" TIMESTAMP(3) NOT NULL,
    "ModifiedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "SubscriptionsPlan" (
    "ID" SERIAL NOT NULL,
    "Title" VARCHAR NOT NULL,
    "Description" VARCHAR NOT NULL,
    "Price" DECIMAL(65,30) NOT NULL,
    "CreatedDate" TIMESTAMP(3) NOT NULL,
    "ModifiedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubscriptionsPlan_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Questiontopic" (
    "ID" SERIAL NOT NULL,
    "Question" VARCHAR NOT NULL,
    "OptionA" VARCHAR NOT NULL,
    "OptionB" VARCHAR NOT NULL,
    "OptionC" VARCHAR NOT NULL,
    "OptionD" VARCHAR NOT NULL,
    "ANS" VARCHAR NOT NULL,
    "topicTypesID" INTEGER,

    CONSTRAINT "Questiontopic_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Contenttopic" (
    "ID" SERIAL NOT NULL,
    "Title" VARCHAR NOT NULL,
    "Subtitle" VARCHAR NOT NULL,
    "Content" VARCHAR NOT NULL,
    "TimeStamp" TIMESTAMP(3) NOT NULL,
    "topicTypesID" INTEGER,

    CONSTRAINT "Contenttopic_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Videotopic" (
    "ID" SERIAL NOT NULL,
    "Title" VARCHAR NOT NULL,
    "Subtitle" VARCHAR NOT NULL,
    "Link" VARCHAR NOT NULL,
    "Duration" INTEGER NOT NULL,
    "Size" DECIMAL(65,30) NOT NULL,
    "FileType" VARCHAR NOT NULL,
    "topicTypesID" INTEGER,

    CONSTRAINT "Videotopic_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Selfpeacedtopic" (
    "ID" SERIAL NOT NULL,
    "Title" VARCHAR NOT NULL,
    "Subtitle" VARCHAR NOT NULL,
    "topicID" INTEGER,
    "topicTypesID" INTEGER,

    CONSTRAINT "Selfpeacedtopic_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Tab" (
    "ID" SERIAL NOT NULL,
    "Title" VARCHAR NOT NULL,
    "Subtitle" VARCHAR NOT NULL,
    "Content" VARCHAR NOT NULL,
    "Size" DECIMAL(65,30) NOT NULL,
    "Link" VARCHAR NOT NULL,
    "FileType" VARCHAR NOT NULL,
    "selfpeacedtopicID" INTEGER,

    CONSTRAINT "Tab_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "Roles" (
    "ID" SERIAL NOT NULL,
    "Name" VARCHAR NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_certificateID_fkey" FOREIGN KEY ("certificateID") REFERENCES "Certificate"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_domainID_fkey" FOREIGN KEY ("domainID") REFERENCES "Domain"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_subscriptionsPlanID_fkey" FOREIGN KEY ("subscriptionsPlanID") REFERENCES "SubscriptionsPlan"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchasehistory" ADD CONSTRAINT "Purchasehistory_paymentID_fkey" FOREIGN KEY ("paymentID") REFERENCES "Payment"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchasehistory" ADD CONSTRAINT "Purchasehistory_subscriberID_fkey" FOREIGN KEY ("subscriberID") REFERENCES "Subscriber"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchasehistory" ADD CONSTRAINT "Purchasehistory_subscriptionsPlanID_fkey" FOREIGN KEY ("subscriptionsPlanID") REFERENCES "SubscriptionsPlan"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_subscriptionID_fkey" FOREIGN KEY ("subscriptionID") REFERENCES "Subscription"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_subscriberID_fkey" FOREIGN KEY ("subscriberID") REFERENCES "Subscriber"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscriber" ADD CONSTRAINT "Subscriber_authID_fkey" FOREIGN KEY ("authID") REFERENCES "Auth"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Auth" ADD CONSTRAINT "Auth_rolesID_fkey" FOREIGN KEY ("rolesID") REFERENCES "Roles"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_subscriberID_fkey" FOREIGN KEY ("subscriberID") REFERENCES "Subscriber"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topicprogress" ADD CONSTRAINT "Topicprogress_subscriberID_fkey" FOREIGN KEY ("subscriberID") REFERENCES "Subscriber"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topicprogress" ADD CONSTRAINT "Topicprogress_chapterID_fkey" FOREIGN KEY ("chapterID") REFERENCES "Chapter"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topicprogress" ADD CONSTRAINT "Topicprogress_topicID_fkey" FOREIGN KEY ("topicID") REFERENCES "Topic"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_courseID_fkey" FOREIGN KEY ("courseID") REFERENCES "Course"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_chapterID_fkey" FOREIGN KEY ("chapterID") REFERENCES "Chapter"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_topicTypesID_fkey" FOREIGN KEY ("topicTypesID") REFERENCES "TopicTypes"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Questiontopic" ADD CONSTRAINT "Questiontopic_topicTypesID_fkey" FOREIGN KEY ("topicTypesID") REFERENCES "TopicTypes"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contenttopic" ADD CONSTRAINT "Contenttopic_topicTypesID_fkey" FOREIGN KEY ("topicTypesID") REFERENCES "TopicTypes"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Videotopic" ADD CONSTRAINT "Videotopic_topicTypesID_fkey" FOREIGN KEY ("topicTypesID") REFERENCES "TopicTypes"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Selfpeacedtopic" ADD CONSTRAINT "Selfpeacedtopic_topicID_fkey" FOREIGN KEY ("topicID") REFERENCES "Topic"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Selfpeacedtopic" ADD CONSTRAINT "Selfpeacedtopic_topicTypesID_fkey" FOREIGN KEY ("topicTypesID") REFERENCES "TopicTypes"("ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tab" ADD CONSTRAINT "Tab_selfpeacedtopicID_fkey" FOREIGN KEY ("selfpeacedtopicID") REFERENCES "Selfpeacedtopic"("ID") ON DELETE SET NULL ON UPDATE CASCADE;
