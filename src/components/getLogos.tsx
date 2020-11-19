import React from "react";

const PostgresSql = require("../svg/postgressql.svg");
const MongoDBSvg = require("../svg/mongodb.svg");
const SvgForReact = require("../svg/svgforreact.svg");
const TypescriptSvg = require("../svg/typescript.svg");
const ApolloGraphql = require("../svg/apollo-graphql.svg");
const DockerSvg = require("../svg/docker.svg");
const GraphqlSvg = require("../svg/graphql.svg");
const GatsbySvg = require("../svg/gatsby.svg");
const AdobeaiSvg = require("../svg/adobe-illustrator-cc.svg");
const AdobexdSvg = require("../svg/adobexd.svg");
const HerokuSvg = require("../svg/heroku.svg");
const WindowsSvg = require("../svg/win.svg");
const VscodeSvg = require("../svg/vscode.svg");
const ReduxSvg = require("../svg/redux.svg");
const PrismaSvg = require("../svg/prisma.svg");
const GitSvg = require("../svg/git.svg");
const AffinitySvg = require("../svg/affinity.svg");
const LinuxSvg = require("../svg/linux.svg");
const NextJSSvg = require("../svg/nextjs.svg");
const NodeJSSvg = require("../svg/nodejs.svg");
const VerceLSvg = require("../svg/vercel.svg");
const FFmpegSvg = require("../svg/ffmpeg.svg");
const CppSvg = require("../svg/cpp.svg");
const PythonSvg = require("../svg/python.svg");
const PyTorchSvg = require("../svg/pytorch.svg");
const PandasSvg = require("../svg/pandas.svg");
const ErrorSvg = require("../svg/error.svg");
const Firebase = require("../svg/firebase.svg");
const AzureSvg = require("../svg/azure.svg");
const DigitaloceanSvg = require("../svg/digitalocean.svg");
const FigmaSvg = require("../svg/figma.svg");
const MySqlSvg = require("../svg/mysql.svg");
const GetSvg = (
	svgName: string,
	tIndex?: number,
	width?: string
): React.SVGAttributes<SVGElement> => {
	svgName = svgName.toLowerCase();

	const obj = {
		width: width || "4em",
		height: "100%",
		key: tIndex,
		margin: "5px",
	};
	switch (svgName) {
		case "vercel":
			return <VerceLSvg {...obj} />;
		case "digitalocean":
			return <DigitaloceanSvg {...obj} />;
		case "mongodb":
			return <MongoDBSvg {...obj} />;
		case "azure":
			return <AzureSvg {...obj} />;
		case "gatsby":
			return <GatsbySvg {...obj} />;
		case "typescript":
			return <TypescriptSvg {...obj} />;
		case "svgreact":
			return <SvgForReact {...obj} />;
		case "docker":
			return <DockerSvg {...obj} />;
		case "apollo":
			return <ApolloGraphql {...obj} />;
		case "graphql":
			return <GraphqlSvg {...obj} />;
		case "adobexd":
			return <AdobexdSvg {...obj} />;
		case "adobeai":
			return <AdobeaiSvg {...obj} />;
		case "affinity":
			return <AffinitySvg {...obj} />;
		case "cpp":
			return <CppSvg {...obj} />;
		case "ffmpeg":
			return <FFmpegSvg {...obj} />;
		case "git":
			return <GitSvg {...obj} />;
		case "heroku":
			return <HerokuSvg {...obj} />;
		case "firebase":
			return <Firebase {...obj} />;
		case "windows":
			return <WindowsSvg {...obj} />;
		case "vscode":
			return <VscodeSvg {...obj} />;
		case "redux":
			return <ReduxSvg {...obj} />;
		case "prisma":
			return <PrismaSvg {...obj} />;
		case "linux":
			return <LinuxSvg {...obj} />;
		case "nextjs":
			return <NextJSSvg {...obj} />;
		case "python":
			return <PythonSvg {...obj} />;
		case "pytorch":
			return <PyTorchSvg {...obj} />;
		case "figma":
			return <FigmaSvg {...obj} />;
		case "pandas":
			return <PandasSvg {...obj} />;
		case "nodejs":
			return <NodeJSSvg {...obj} />;
		case "postgressql":
			return <PostgresSql {...obj} />;
		case "mysql":
			return <MySqlSvg {...obj} />;
		default:
			return <ErrorSvg {...obj} />;
	}
};
export { GetSvg };
