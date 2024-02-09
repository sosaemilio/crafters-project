import { NextResponse } from "next/server";

interface Params {
	[key: string]: any;
}

export function GET({ req, params }: { req: string; params: Params }) {
	return NextResponse.json({
		message: `updating product ${params}`,
	});
}

export function PUT({ req, params }: { req: string; params: Params }) {
	return NextResponse.json({
		message: `updating product ${params}`,
	});
}

export function DELETE({ req, params }: { req: string; params: Params }) {
	return NextResponse.json({
		message: `deleting product ${params}`,
	});
}
