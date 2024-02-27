import Link from "next/link";

import { Badge } from "../ui/badge";

interface Props {
	_id: number;
	name: string;
	totalQuestions?: number;
	showCount?: boolean;
}

const RenderTag = ({ _id, name }: Props) => {
	return (
		<>
			<Link
				href={`/tags/${_id}`}
				key={_id}
				className="flex justify-between gap-2">
				<Badge className="rounded-md border-none px-2 py-1 uppercase">
					{name}
				</Badge>
			</Link>
		</>
	);
};

export default RenderTag;
