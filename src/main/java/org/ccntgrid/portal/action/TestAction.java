/*
 * Copyright (c) 2012 Lei Hu. All rights reserved.
 * Lei Hu PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 */

package org.ccntgrid.portal.action;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class TestAction {
	private static final Log LOG = LogFactory.getLog(TestAction.class);

	@RequestMapping("/index.htm")
	public ModelAndView test(HttpServletRequest request) throws Exception {
		LOG.info("test");
		String str = "test string.";
		return new ModelAndView("index", "str", str);
	}
}
